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

const express = require('express');
const router = express.Router();
const db = require('../config/database.config');

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
    }
    else if (genero === "Feminino") {
      periodoContribuicaoMinimo = 180;
      idadeAposentadoria = 62;
      genero = "f";
    }

    const tempoContribuicaoMes = arrCampoAnoMes.length;
    let tempoContribuicaoPendente = periodoContribuicaoMinimo - tempoContribuicaoMes;

    let anoNascimento = new Date(req.body.dataNascimento).getFullYear();
    let idade = new Date().getFullYear() - anoNascimento;


    // Calcular a idade mínima para aposentadoria TODO
    let mesAposentadoria = 1;
    let anoAposentadoria = 2;

    const sql_simulacao =
      `INSERT INTO simulacao_beneficio 
      (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria, mes_aposentadoria, ano_aposentadoria, tempo_contribuicao_pendente_mes) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    let values = [genero, dataNascimento, idade, tempoContribuicaoMes, idadeAposentadoria, mesAposentadoria, anoAposentadoria, tempoContribuicaoPendente];
    let [result] = await db.poolSimule.query(sql_simulacao, values);
    const idSimulacao = result.insertId;


    for (let i = 0; i < arrCampoAnoMes.length; i++) {
      const salario = arrCampoSalario[i].replace(".", "").replace("R$", "").replace(",", ".");

      const ano = arrCampoAnoMes[i].substring(0, 4);
      const mes = arrCampoAnoMes[i].substring(5, 7);

      const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
      const values = [ano, mes, salario, idSimulacao];
      [result] = await db.poolSimule.query(query, values);
    }

    return res.send("id_simulacao: " + idSimulacao);






  } catch (error) {
    // Trate a exceção aqui, você pode enviar uma resposta de erro adequada ao cliente ou fazer outras ações necessárias
    console.error(error);
    res.status(500).send('Ocorreu um erro durante a simulação. Por favor, tente novamente mais tarde.');
  }
});

module.exports = router;





