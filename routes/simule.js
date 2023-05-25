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

module.exports = router;