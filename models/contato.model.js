const { poolPrevAqui } = require('../config/database.config');

class Contato {
  constructor(nome, email, assunto, mensagem) {
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }

  async criar() {
    try {
      const query = 'INSERT INTO contato (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)';
      const values = [this.nome, this.email, this.assunto, this.mensagem];

      const [result] = await poolPrevAqui.query(query, values);
      return result.insertId;
    } catch (error) {
      throw new Error('Erro ao criar o contato.');
    }
  }

  static async listarTodos() {
    try {
      const query = 'SELECT * FROM contato';
      const [rows] = await poolPrevAqui.query(query);
      return rows;
    } catch (error) {
      throw new Error('Erro ao listar os contatos.');
    }
  }

  static async consultarPorId(id) {
    try {
      const query = 'SELECT * FROM contato WHERE id = ?';
      const values = [id];

      const [rows] = await poolPrevAqui.query(query, values);
      if (rows.length === 0) {
        throw new Error('Contato não encontrado.');
      }

      return rows[0];
    } catch (error) {
      throw new Error('Erro ao consultar o contato.');
    }
  }

  static async deletar(id) {
    try {
      const query = 'DELETE FROM contato WHERE id = ?';
      const values = [id];

      const [result] = await poolPrevAqui.query(query, values);
      if (result.affectedRows === 0) {
        throw new Error('Contato não encontrado.');
      }

      return 'Contato deletado com sucesso.';
    } catch (error) {
      throw new Error('Erro ao deletar o contato.');
    }
  }

  async cadastrarEmail() {
    try {
      const query = 'UPDATE contato SET email = ? WHERE id = ?';
      const values = [this.email, this.id];

      await poolPrevAqui.query(query, values);
      return 'E-mail cadastrado com sucesso.';
    } catch (error) {
      throw new Error('Erro ao cadastrar o e-mail.');
    }
  }
  
}

module.exports = Contato;
