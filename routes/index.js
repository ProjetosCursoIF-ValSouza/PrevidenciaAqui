const express = require('express');
const router = express.Router();

/* GET Página Inicial. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Notícias. */
router.get('/noticia', function(req, res, next) {
  res.render('noticia');
});

/* GET Notícia(BD). */
router.get('/noticia', function(req, res, next) {
  res.render('noticia');
});

/* GET Sobre. */
router.get('/sobre', function(req, res, next) {
  res.render('Sobre');
});

/* GET Direitos e Deveres. */
router.get('/direitos', function(req, res, next) {
  res.render('Direitos');
});

/* GET Simule. */
router.get('/simule', function(req, res, next) {
  res.render('simule');
});

/* GET Fale Conosco. */
router.get('/fale', function(req, res, next) {
  res.render('fale');
});

/* GET Entrar. */
router.get('/entrar', function(req, res, next) {
  res.render('entrar');
});

/* GET Boletim Informativo. */
router.get('/boletim', function(req, res, next) {
  res.render('boletim');
});

module.exports = router;
