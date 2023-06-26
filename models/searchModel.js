const {poolPrevAqui} = require('../config/database.config');

class Pesquisa {
  static async pesquisar(query) {
    try{
      const sql = "SELECT * FROM noticia WHERE conteudo LIKE ?";
    const pattern = `%${query}%`; // Padrão de busca
    const [rows] = await poolPrevAqui.query(sql, [pattern]);
    
    // Realize a consulta no banco de dados ou em outras fontes de dados para encontrar os resultados correspondentes à pesquisa
  
    console.log(rows);
    return rows;      
    }
    catch (err) {
      console.log(err);
    }
    
  }
}

module.exports = Pesquisa;
