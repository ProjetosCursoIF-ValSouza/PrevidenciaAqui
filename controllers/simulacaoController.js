const { poolSimule } = require('../config/database.config');

// Função para criar uma nova simulação
async function criarSimulacao(simulacao) {
  try {
    const connection = await poolSimule.getConnection();
    const [results] = await connection.query('INSERT INTO simulacao_beneficio SET ?', simulacao);
    connection.release();

    return results.insertId;
  } catch (error) {
    console.error('Erro ao criar a simulação:', error);
    throw new Error('Erro ao criar a simulação.');
  }
}

// Função para obter uma simulação pelo ID
async function obterSimulacaoPorId(id) {
  try {
    const connection = await poolSimule.getConnection();
    const [results] = await connection.query('SELECT * FROM simulacao_beneficio WHERE id = ?', [id]);
    connection.release();

    if (results.length === 0) {
      throw new Error('Simulação não encontrada.');
    }

    return results[0];
  } catch (error) {
    console.error('Erro ao obter a simulação:', error);
    throw new Error('Erro ao obter a simulação.');
  }
}

// Função para excluir uma simulação pelo ID
async function excluirSimulacao(id) {
  try {
    const connection = await poolSimule.getConnection();
    await connection.query('DELETE FROM simulacao_beneficio WHERE id = ?', [id]);
    connection.release();
  } catch (error) {
    console.error('Erro ao excluir a simulação:', error);
    throw new Error('Erro ao excluir a simulação.');
  }
}

// Função para listar todas as simulações
async function listarSimulacoes() {
  try {
    const connection = await poolSimule.getConnection();
    const [results] = await connection.query('SELECT * FROM simulacao_beneficio');
    connection.release();

    return results;
  } catch (error) {
    console.error('Erro ao obter as simulações:', error);
    throw new Error('Erro ao obter as simulações.');
  }
}

module.exports = {
  criarSimulacao,
  obterSimulacaoPorId,
  excluirSimulacao,
  listarSimulacoes,
};
