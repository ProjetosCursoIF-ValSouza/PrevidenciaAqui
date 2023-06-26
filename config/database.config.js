
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

/*
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BD_PrevAqui',
});


module.exports =pool;
*/

