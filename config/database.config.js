const mysql = require('mysql2/promise');
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BD_PrevAqui',
});
module.exports = conexao;