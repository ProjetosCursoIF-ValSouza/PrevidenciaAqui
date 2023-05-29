
const mysql = require('mysql2/promise');

const poolPrevAqui = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'BD_PrevAqui',
});

const poolSimule = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'previdenciaaquidb',
});

module.exports = {
  poolPrevAqui,
  poolSimule
};

