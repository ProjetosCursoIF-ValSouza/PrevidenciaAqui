const express = require('express');
const router = express.Router();
const db = require('../config/database.config');
const path = require('path');
const ejs = require('ejs');

// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Função para calcular o mês e ano da aposentadoria
function calcularAposentadoria(idade, genero) {
  const idadeAposentadoria = genero === 'Masculino' ? 65 : 62;
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth() + 1;
  let mesAposentadoria, anoAposentadoria;

  if (mesAtual <= 6) {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade;
  } else {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade + 1;
  }

  return {
    mesAposentadoria,
    anoAposentadoria
  };
}

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
router.get('/soma', async (req, res) => {
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
      const [salarioResult] = await db.poolSimule.query(query, [ano, mes, id_simulacao]);
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

module.exports = router;


/* const express = require('express');
const router = express.Router();
const db = require('../config/database.config'); // Importe o arquivo de configuração do banco de dados


// Rota para exibir o formulário de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota para criar uma nova simulação
router.post('/simule', async function (req, res, next) {
  //// Extrair os dados do corpo da solicitação (formulário)
  let {
    mesAno,
    salario,
    genero,
    dataNascimento
  } = req.body;

  genero = genero == "Feminino" ? "f" : "m"
  const idadeAposentadoria = req.body.genero === 'Masculino' ? 65 : 62;
  const anoNascimento = new Date(req.body.dataNascimento).getFullYear();
  const idade = new Date().getFullYear() - anoNascimento;
  const tempo_contribuicao_mes = req.body['campoAnoMes[]'];
  const salarios = req.body['campoSalario[]'];
  console.log("DADOS QUE ESTÃO VINDO DO FORM VIA INPUT NAME=VALUE:");
  console.log(idadeAposentadoria);
  console.log(anoNascimento);
  console.log(idade);
  console.log(tempo_contribuicao_mes.length);
  console.log(req.body);
  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria) VALUES (?, ?, ?, ?, ?);`
  let values = [genero, dataNascimento, idade, tempo_contribuicao_mes.length, idadeAposentadoria]
  let [result] = await db.poolSimule.query(sql_simulacao, values);
  const id_simulacao = result.insertId;


  for (let index = 0; index < tempo_contribuicao_mes.length; index++) {
    // Implemente a lógica para criar uma nova simulação no banco de dados
    // Use os dados extraídos do formulário para criar um novo registro no banco de dados
    // Dica: Você pode usar o pool de conexão 'poolSimule' do arquivo de configuração do banco de dados
    // Exemplo de inserção de dados:
    const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
    values = [
      tempo_contribuicao_mes[index].substring(0,4),
      tempo_contribuicao_mes[index].substring(5,7),
      salarios[index].replace(".", "").replace("R$","").replace(",","."),
      id_simulacao
    ];
    [result] = await db.poolSimule.query(query, values);
  }

  res.send();

  // Verifique se a inserção foi bem-sucedida e retorne uma resposta adequada ao cliente

  
}); 

module.exports = router; */
/*
const express = require('express');
const router = express.Router();
const db = require('../config/database.config'); // Importe o arquivo de configuração do banco de dados

// Rota para exibir o formulário de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota para criar uma nova simulação
router.post('/simule', async function (req, res, next) {
  //// Extrair os dados do corpo da solicitação (formulário)
  let { mesAno, salario, genero, dataNascimento } = req.body;

  genero = genero == "Feminino" ? "f" : "m";
  const idadeAposentadoria = req.body.genero === 'Masculino' ? 65 : 62;
  const anoNascimento = new Date(req.body.dataNascimento).getFullYear();
  const idade = new Date().getFullYear() - anoNascimento;
  const tempo_contribuicao_mes = req.body['campoAnoMes[]'];
  const salarios = req.body['campoSalario[]'];

  console.log("DADOS QUE ESTÃO VINDO DO FORM VIA INPUT NAME=VALUE:");
  console.log(idadeAposentadoria);
  console.log(anoNascimento);
  console.log(idade);
  console.log(tempo_contribuicao_mes.length);
  console.log(req.body);

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria) VALUES (?, ?, ?, ?, ?);`;
  let values = [genero, dataNascimento, idade, tempo_contribuicao_mes.length, idadeAposentadoria];
  let [result] = await db.poolSimule.query(sql_simulacao, values);
  const id_simulacao = result.insertId;

  for (let index = 0; index < tempo_contribuicao_mes.length; index++) {
    const salario = salarios[index].replace(".", "").replace("R$", "").replace(",", ".");
    
    // Validar se o salário é um número válido
    if (isNaN(salario)) {
      // Salário inválido, faça algo, como retornar uma mensagem de erro ou interromper o loop
      console.log(`O salário "${salarios[index]}" é inválido.`);
      continue;
    }

    // Validar se o ano e mês são válidos
    const ano = tempo_contribuicao_mes[index].substring(0, 4);
    const mes = tempo_contribuicao_mes[index].substring(5, 7);
    // Faça as validações necessárias para o ano e mês

    // Inserir o registro no banco de dados somente se passar nas validações
    const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
    const values = [ano, mes, salario, id_simulacao];
    [result] = await db.poolSimule.query(query, values);
  }

  res.send();

  // Verifique se a inserção foi bem-sucedida e retorne uma resposta adequada ao cliente
});

module.exports = router; */
/*
const express = require('express');
const router = express.Router();
const db = require('../config/database.config'); // Importe o arquivo de configuração do banco de dados

// Rota para exibir o formulário de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota para criar uma nova simulação
router.post('/simule', async function (req, res, next) {
  //// Extrair os dados do corpo da solicitação (formulário)
  let { mesAno, salario, genero, dataNascimento } = req.body;

  genero = genero == "Feminino" ? "f" : "m";
  const idadeAposentadoria = req.body.genero === 'Masculino' ? 65 : 62;
  const anoNascimento = new Date(req.body.dataNascimento).getFullYear();
  const idade = new Date().getFullYear() - anoNascimento;
  const tempo_contribuicao_mes = req.body['campoAnoMes[]'];
  const salarios = req.body['campoSalario[]'];

  console.log("DADOS QUE ESTÃO VINDO DO FORM VIA INPUT NAME=VALUE:");
  console.log(idadeAposentadoria);
  console.log(anoNascimento);
  console.log(idade);
  console.log(tempo_contribuicao_mes.length);
  console.log(req.body);

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria) VALUES (?, ?, ?, ?, ?);`;
  let values = [genero, dataNascimento, idade, tempo_contribuicao_mes.length, idadeAposentadoria];
  let [result] = await db.poolSimule.query(sql_simulacao, values);
  const id_simulacao = result.insertId;

  for (let index = 0; tempo_contribuicao_mes && index < tempo_contribuicao_mes.length; index++) {
    const salario = salarios[index].replace(".", "").replace("R$", "").replace(",", ".");
    
    // Validar se o salário é um número válido
    if (isNaN(salario)) {
      // Salário inválido, faça algo, como retornar uma mensagem de erro ou interromper o loop
      console.log(`O salário "${salarios[index]}" é inválido.`);
      continue;
    }

    // Validar se o ano e mês são válidos
    const ano = tempo_contribuicao_mes[index].substring(0, 4);
    const mes = tempo_contribuicao_mes[index].substring(5, 7);
    // Faça as validações necessárias para o ano e mês

    // Inserir o registro no banco de dados somente se passar nas validações
    const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
    const values = [ano, mes, salario, id_simulacao];
    [result] = await db.poolSimule.query(query, values);
  }

  res.send();

  // Verifique se a inserção foi bem-sucedida e retorne uma resposta adequada ao cliente
});

module.exports = router; */










