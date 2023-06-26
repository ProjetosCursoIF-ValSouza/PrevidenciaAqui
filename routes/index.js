const express = require('express');
const { poolPrevAqui } = require('../config/database.config');
const router = express.Router();

/* GET Página Inicial. */
router.get('/', async function(req, res, next) {
  const sql = 'SELECT * FROM noticia;';
  const [rows] = await poolPrevAqui.query(sql);
  const user = req.session.user;
  res.render('index', {noticias: rows, user });
});

router.get('/logout', async function(req, res, next) {
  const user = req.session.user;
  res.render('auth/logout', { user });
}); 

/* GET Sobre. */
router.get('/sobre', function(req, res, next) {
  res.render('Sobre');
});

/* GET Regras. */
router.get('/direitos', function(req, res, next) {
  res.render('direitos');
});

/* GET Simule. */
router.get('/simule', function(req, res, next) {
  res.render('simule');
});


module.exports = router;
