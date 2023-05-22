/* const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BD_PrevAqui',
});

module.exports = pool;


const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_prevaquisimule',
});

module.exports = pool; */

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
};

