/* const express = require('express');
const router = express.Router();
const db = require('../config/database.config'); // Importe o arquivo de configuração do banco de dados
// Rota para exibir o formulário de simulação
router.get('/simule', function(req, res, next) {
	res.render('simule');
});
// Rota para criar uma nova simulação
router.post('/simule', async function(req, res, next) {
				const idadeAposentadoria = req.body.genero === 'Masculino' ? 65 : 62;
				const anoNascimento = new Date(req.body.dataNascimento).getFullYear();
				const idade = new Date().getFullYear() - anoNascimento;
				const tempo_cotribuicao_mes = req.body['campoAnoMes[]'];
				console.log("DADOS QUE ESTÃO VINDO DO FORM VIA INPUT NAME=VALUE:");
				console.log(idadeAposentadoria);
				console.log(anoNascimento);
				console.log(idade);
				console.log(tempo_cotribuicao_mes.length);
				console.log(req.body);
				const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria, ano_aposentadoria) VALUES (?, ?, ?, ?, ?, ?);`
				const sql_periodo = ``;
				res.send(req.body);
				// try {
				// Extrair os dados do corpo da solicitação (formulário)
				const {
					mesAno,
					salario,
					genero,
					dataNascimento
				} = req.body;
				// Implemente a lógica para criar uma nova simulação no banco de dados
				// Use os dados extraídos do formulário para criar um novo registro no banco de dados
				// Dica: Você pode usar o pool de conexão 'poolSimule' do arquivo de configuração do banco de dados
				// Exemplo de inserção de dados:
				const query = `INSERT INTO simulacao_beneficio (genero, data_nascimento, salario) VALUES (?, ?, ?)`;
				const values = [genero, dataNascimento, salario];
				const [result] = await db.poolSimule.query(query, values);
				// Verifique se a inserção foi bem-sucedida e retorne uma resposta adequada ao cliente
				if (result.affectedRows === 1) {
					res.status(200).json({
						message: 'Simulação criada com sucesso!'
					});
				} else {
					res.status(500).json({
						error: 'Erro ao criar simulação.'
					});
				}
			} catch (error) {
				console.error('Erro ao criar simulação:', error);
				res.status(500).json({
					error: 'Erro ao criar simulação.'
				});
			}
		});
		
		module.exports = router; */

		const express = require('express');
		const router = express.Router();
		const db = require('../config/database.config');
		
		router.get('/simule', function(req, res, next) {
			res.render('simule');
		});
		
		router.post('/simule', async function(req, res, next) {
			try {
				const {
					mesAno,
					salario,
					genero,
					dataNascimento
				} = req.body;
		
				const query = `INSERT INTO simulacao_beneficio (genero, data_nascimento, salario) VALUES (?, ?, ?)`;
				const values = [genero, dataNascimento, salario];
				const [result] = await db.poolSimule.query(query, values);
		
				if (result.affectedRows === 1) {
					res.status(200).json({
						message: 'Simulação criada com sucesso!'
					});
				} else {
					res.status(500).json({
						error: 'Erro ao criar simulação.'
					});
				}
			} catch (error) {
				console.error('Erro ao criar simulação:', error);
				res.status(500).json({
					error: 'Erro ao criar simulação.'
				});
			}
		});
		
		module.exports = router;
		