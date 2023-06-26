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
    const dataAposentadoria = new Date(anoAposentadoria, mesNascimento - 1);
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

      // Obter o índice de atualização monetária para o mês e ano correspondentes
      const sql_monetaria = `SELECT indice FROM atualizacao_monetaria WHERE mes_ano = ?`;
      const [result] = await db.poolSimule.query(sql_monetaria, [arrCampoAnoMes[i]]);
      const indice = result[0].indice;

      let salarioAtualizado = parseFloat(salario) * indice;

      const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
      let loopValues = [ano, mes, salarioAtualizado, idSimulacao];
      await db.poolSimule.query(query, loopValues);

      // Calcule o valor do benefício somando os salários atualizados
      valorBeneficio += salarioAtualizado;
    }

    // Divida o valor do benefício pela quantidade de salários e multiplique por 0.60
    valorBeneficio = (valorBeneficio / arrCampoAnoMes.length) * 0.60;

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





