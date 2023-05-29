const express = require('express');
const router = express.Router();
const db = require('../config/database.config');
const path = require('path');
const ejs = require('ejs');

// Rota para exibir o formulário de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota para criar uma nova simulação
router.post('/simule', async function (req, res, next) {
  let {
    mesAno,
    salario,
    genero,
    dataNascimento
  } = req.body;

  genero = genero == "Feminino" ? "f" : "m";
  const idadeAposentadoria = req.body.genero === 'Masculino' ? 65 : 62;
  const anoNascimento = new Date(req.body.dataNascimento).getFullYear();
  const idade = new Date().getFullYear() - anoNascimento;
  const tempo_contribuicao_mes = req.body['campoAnoMes[]'];
  const salarios = req.body['campoSalario[]'];

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria) VALUES (?, ?, ?, ?, ?);`;
  let values = [genero, dataNascimento, idade, tempo_contribuicao_mes.length, idadeAposentadoria];
  let [result] = await db.poolSimule.query(sql_simulacao, values);
  const id_simulacao = result.insertId;

  for (let index = 0; index < tempo_contribuicao_mes.length; index++) {
    const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
    values = [
      tempo_contribuicao_mes[index].substring(0, 4),
      tempo_contribuicao_mes[index].substring(5, 7),
      salarios[index].replace(".", "").replace("R$", "").replace(",", "."),
      id_simulacao
    ];
    [result] = await db.poolSimule.query(query, values);
  }

  // Preencha os dados necessários para exibição no formulário "Resultados"
  const dadosResultados = {
    genero: genero == "f" ? "Feminino" : "Masculino",
    idade,
    tempo_contribuicao_mes,
    // Preencha os demais dados necessários para exibição no formulário "Resultados"
    // ...
  };

  const resultadosTemplatePath = path.join(__dirname, '../views/resultados.ejs');
  const renderedResultados = await ejs.renderFile(resultadosTemplatePath, dadosResultados);
  res.send(renderedResultados);
});

module.exports = router;

