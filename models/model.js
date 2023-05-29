const mysql = require('mysql2/promise');

class SimulacaoBeneficio {
  constructor() {
    this.connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'previdenciaaquidb'
    });
  }

  async criar(simulacao) {
    try {
      const sql = `INSERT INTO simulacao_beneficio (tempo_contribuicao_mes, idade_aposentadoria, mes_aposentadoria, ano_aposentadoria, tempo_contribuicao_pendente_mes, valor_beneficio) VALUES (?, ?, ?, ?, ?, ?)`;
      const values = [
        simulacao.tempoContribuicaoMes,
        simulacao.idadeAposentadoria,
        simulacao.mesAposentadoria,
        simulacao.anoAposentadoria,
        simulacao.tempoContribuicaoPendenteMes,
        simulacao.valorBeneficio
      ];

      const [rows] = await this.connection.execute(sql, values);

      if (rows.affectedRows === 1) {
        return { success: true, message: 'Registro criado com sucesso.' };
      } else {
        return { success: false, message: 'Não foi possível criar o registro.' };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao criar o registro.', error };
    }
  }

  async listarTodos() {
    try {
      const sql = `SELECT * FROM simulacao_beneficio`;
      const [rows] = await this.connection.query(sql);

      return { success: true, data: rows };
    } catch (error) {
      return { success: false, message: 'Erro ao listar os registros.', error };
    }
  }

  async consultarPorId(id) {
    try {
      const sql = `SELECT * FROM simulacao_beneficio WHERE id = ?`;
      const [rows] = await this.connection.execute(sql, [id]);

      if (rows.length === 1) {
        return { success: true, data: rows[0] };
      } else {
        return { success: false, message: 'Registro não encontrado.' };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao consultar o registro.', error };
    }
  }

  async deletar(id) {
    try {
      const sql = `DELETE FROM simulacao_beneficio WHERE id = ?`;
      const [rows] = await this.connection.execute(sql, [id]);

      if (rows.affectedRows === 1) {
        return { success: true, message: 'Registro deletado com sucesso.' };
      } else {
        return { success: false, message: 'Registro não encontrado.' };
      }
    } catch (error) {
      return { success: false, message: 'Erro ao deletar o registro.', error };
    }
  }
}

module.exports = SimulacaoBeneficio;

