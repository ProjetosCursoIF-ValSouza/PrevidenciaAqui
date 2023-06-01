
const mysql = require('mysql2/promise');

const poolPrevAqui = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BD_PrevAqui',
});

const poolSimule = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'previdenciaaquidb',
});

module.exports = {
  poolPrevAqui,
  poolSimule
};

