

   

const express = require('express');
const router = express.Router();
const db = require('../config/database.config'); // Importe o arquivo de configuração do banco de dados

// Rota GET para renderizar a página de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota POST para processar os dados do formulário de simulação
router.post('/simule', async function (req, res, next) {
  try {
    // extrair os dados do formulário
    let arrCampoAnoMes = req.body['campoAnoMes[]'];
    let arrCampoSalario = req.body['campoSalario[]'];
    let dataNascimento = req.body.dataNascimento;
    let genero = req.body.genero;

    // formatar os dados
    let periodoContribuicaoMinimo;
    let idadeAposentadoria;
    if (genero === "Masculino") {
      periodoContribuicaoMinimo = 240;
      idadeAposentadoria = 65;
      genero = "m";
    } else if (genero === "Feminino") {
      periodoContribuicaoMinimo = 180;
      idadeAposentadoria = 62;
      genero = "f";
    }

    const tempoContribuicaoMes = arrCampoAnoMes.length;
    let tempoContribuicaoPendente = periodoContribuicaoMinimo - tempoContribuicaoMes;

    let anoNascimento = new Date(req.body.dataNascimento).getFullYear();
    let idade = new Date().getFullYear() - anoNascimento;
    let mesNascimento = new Date(req.body.dataNascimento).getMonth() + 1;

    // Calcular a idade mínima para aposentadoria
    const dataAtual = new Date();
    const anoAposentadoria = anoNascimento + idadeAposentadoria;
    //const mesAposentadoria = (dataAtual.getMonth() + 1 < 10 ? '0' : '') + (dataAtual.getMonth() + 1);
    const dataAposentadoria = new Date(anoAposentadoria, mesNascimento - 1); // subtrai 1 do mês de nascimento porque o método Date() espera um valor entre 0 e 11 para o mês
    const mesAposentadoria = (dataAposentadoria.getMonth() + 1 < 10 ? '0' : '') + (dataAposentadoria.getMonth() + 1);


    const sql_simulacao =
      `INSERT INTO simulacao_beneficio 
      (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria, mes_aposentadoria, ano_aposentadoria, tempo_contribuicao_pendente_mes) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    let values = [genero, dataNascimento, idade, tempoContribuicaoMes, idadeAposentadoria, mesAposentadoria, anoAposentadoria, tempoContribuicaoPendente];
    let [result] = await db.poolSimule.query(sql_simulacao, values);
    const idSimulacao = result.insertId;

    // Defina a variável valorBeneficio aqui
let valorBeneficio = 0;
for (let i = 0; i < arrCampoAnoMes.length; i++) {
  const salario = arrCampoSalario[i].replace(".", "").replace("R$", "").replace(",", ".");
  const ano = arrCampoAnoMes[i].substring(0, 4);
  const mes = arrCampoAnoMes[i].substring(5, 7);

  const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
  const values = [ano, mes, salario, idSimulacao];
  [result] = await db.poolSimule.query(query, values);

  // Calcule o valor do benefício somando os salários
  valorBeneficio += parseFloat(salario);
}

// Divida o valor do benefício pela quantidade de salários e multiplique por 0.60
  valorBeneficio = (valorBeneficio / arrCampoAnoMes.length) * 0.60;

//  valorBeneficio /= arrCampoAnoMes.length;



    const simulacaoData = {
      idSimulacao: idSimulacao,
      genero: genero,
      dataNascimento: dataNascimento,
      idade: idade,
      tempoContribuicaoMes: tempoContribuicaoMes,
      idadeAposentadoria: idadeAposentadoria,
      mesAposentadoria: mesAposentadoria,
      anoAposentadoria: anoAposentadoria,
      tempoContribuicaoPendente: tempoContribuicaoPendente,
      valorBeneficio: valorBeneficio
    };

    return res.render('resultados', { simulacaoData: simulacaoData });
  } catch (error) {
    // Tratar erros adequadamente
    console.error(error);
    return res.status(500).send("Erro ao processar a simulação.");
  }
});

module.exports = router;


 // Função para calcular o valor_beneficio
/*async function calcularBeneficio(genero, idade, id_simulacao) {
  let idadeMinima;
  let indiceBase;

  if (genero === 'f') {
    idadeMinima = 62;
  } else if (genero === 'm') {
    idadeMinima = 65;
  } else {
    return 'Condição mínima ainda não adquirida!';
  }

  if (idade < idadeMinima) {
    return 'Idade abaixo do mínimo requerido!';
  }

  const query = `SELECT SUM(salario_atualizado) as total FROM simulacao_periodo_trabalho WHERE simulacao_beneficio_id = ?`;
  const [result] = await db.poolSimule.query(query, [id_simulacao]);
  const salarioTotal = result[0].total;

  if (genero === 'f') {
    if (salarioTotal < 180) {
      return 'Tempo de contribuição abaixo do mínimo requerido!';
    } else if (salarioTotal === 180) {
      indiceBase = 0.6;
    } else if (salarioTotal > 180) {
      const quantidadesExcedentes = (salarioTotal - 180) / 12;
      indiceBase = 0.6 + quantidadesExcedentes * 0.02;
    }
  } else if (genero === 'm') {
    if (salarioTotal < 240) {
      return 'Tempo de contribuição abaixo do mínimo requerido!';
    } else if (salarioTotal === 240) {
      indiceBase = 0.6;
    } else if (salarioTotal > 240) {
      const quantidadesExcedentes = (salarioTotal - 240) / 12;
      indiceBase = 0.6 + quantidadesExcedentes * 0.02;
    }
  }

  const valorBeneficio = salarioTotal * indiceBase;
  return valorBeneficio.toFixed(2);
}

// Rota para calcular a soma dos salários atualizados
/* router.get('/soma', async (req, res) => {
  try {
    const query = `SELECT SUM(salario_atualizado) as total FROM simulacao_periodo_trabalho`;
    const [result] = await db.poolSimule.query(query);
    const totalSalarios = result[0].total || 0;

    res.send(`Total dos salários atualizados: ${totalSalarios}`);
  } catch (error) {
    console.error('Erro ao calcular a soma dos salários:', error);
    res.status(500).send('Erro ao calcular a soma dos salários');
  }
}); 

// Rota para realizar a simulação
router.post('/simule', async (req, res) => {
  const { genero, dataNascimento, mesAno, salario } = req.body;
  const idade = calcularIdade(dataNascimento);
  const { mesAposentadoria, anoAposentadoria } = calcularAposentadoria(idade, genero);

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria, mes_aposentadoria, ano_aposentadoria) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [genero, dataNascimento, idade, mesAno.length, idadeAposentadoria, mesAposentadoria, anoAposentadoria];

  try {
    const [result] = await db.poolSimule.query(sql_simulacao, values);
    const id_simulacao = result.insertId;

    for (let index = 0; index < mesAno.length; index++) {
      const query = `SELECT salario_atualizado FROM simulacao_periodo_trabalho WHERE ano = ? AND mes = ? AND simulacao_beneficio_id = ?`;
      const [ano, mes] = mesAno[index].split('/');

      // Executar a consulta para obter o salario_atualizado
     /* const [salarioResult] = await db.poolSimule.query(query, [ano, mes, id_simulacao]);
      const salario_atualizado = salarioResult[0].salario_atualizado;

      const queryValues = [ano, mes, salario_atualizado, id_simulacao];
      await db.poolSimule.query(query, queryValues);
    } 

    const valorBeneficio = await calcularBeneficio(genero, idade, id_simulacao);

    res.render(path.resolve(__dirname, '../views/resultados'), {
      valorBeneficio
    });
  } catch (error) {
    console.error('Erro ao realizar a simulação:', error);
    res.status(500).send('Erro ao realizar a simulação');
  }
}); */


