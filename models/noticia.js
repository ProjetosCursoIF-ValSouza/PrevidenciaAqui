/* const db = require('../config/database.config');

class Noticia {
    static async findAll() {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('SELECT * FROM noticia');
            connection.release();
            return rows;
        } catch (error) {
            console.error(error);
        }
    }

    static async findById(id) {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('SELECT * FROM noticia WHERE id = ?', [id]);
            connection.release();
            return rows[0];
        } catch (error) {
            console.error(error);
        }
    }

    static async create(titulo, conteudo) {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('INSERT INTO noticia (titulo, conteudo) VALUES (?)', [titulo, conteudo]);
            connection.release();
            return rows.insertId;
        } catch (error) {
            console.error(error);
        }
    }

    static async update(id, done) {
        try {
            const connection = await db.getConnection();
            await connection.execute('UPDATE noticia SET done = ?, updated_at = NOW() WHERE id = ?', [done, id]);
            connection.release();
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    static async delete(id) {
        try {
            const connection = await db.getConnection();
            await connection.execute('DELETE FROM noticia WHERE id = ?', [id]);
            connection.release();
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Noticia; */

const db = require('../config/database.config');

class Noticia {
  static async findAll() {
    try {
      const connection = await db.poolPrevAqui.getConnection();
      const [rows, fields] = await connection.execute('SELECT * FROM noticia');
      connection.release();
      return rows;
    } catch (error) {
      console.error(error);
      throw error; // Adicionado tratamento de erro
    }
  }

  static async findById(id) {
    try {
      const connection = await db.poolPrevAqui.getConnection();
      const [rows, fields] = await connection.execute('SELECT * FROM noticia WHERE id = ?', [id]);
      connection.release();
      console.log(rows);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw error; // Adicionado tratamento de erro
    }
  }

  static async create(titulo, conteudo) {
    try {
      const connection = await db.poolPrevAqui.getConnection();
      const [rows, fields] = await connection.execute('INSERT INTO noticia (titulo, conteudo) VALUES (?)', [titulo, conteudo]);
      connection.release();
      return rows.insertId;
    } catch (error) {
      console.error(error);
      throw error; // Adicionado tratamento de erro
    }
  }

  static async update(id, done) {
    try {
      const connection = await db.poolPrevAqui.getConnection();
      await connection.execute('UPDATE noticia SET done = ?, updated_at = NOW() WHERE id = ?', [done, id]);
      connection.release();
      return true;
    } catch (error) {
      console.error(error);
      throw error; // Adicionado tratamento de erro
    }
  }

  static async delete(id) {
    try {
      const connection = await db.poolPrevAqui.getConnection();
      await connection.execute('DELETE FROM noticia WHERE id = ?', [id]);
      connection.release();
      return true;
    } catch (error) {
      console.error(error);
      throw error; // Adicionado tratamento de erro
    }
  }
}

module.exports = Noticia;
