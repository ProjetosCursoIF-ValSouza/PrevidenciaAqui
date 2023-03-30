var express = require('express');
var router = express.Router();

/* GET Noticias. */
router.get('/', function(req, res, next) {
  res.render('Noticias', { title: 'PrevidenciaAqui | Noticias' });
});

/* GET Sobre. */
router.get('/', function(req, res, next) {
  res.render('Sobre', { title: 'PrevidenciaAqui | Sobre' });
});

/* GET Direitos e Deveres. */
router.get('/', function(req, res, next) {
  res.render('Direitos', { title: 'PrevidenciaAqui | Direitos' });
});

/* GET Calculos. */
router.get('/calculos', function(req, res, next) {
  res.render('calculos', { title: 'PrevidenciaAqui | Calculos' });
});

/* GET Fale Conosco. */
router.get('/fale', function(req, res, next) {
  res.render('fale', { title: 'PrevidenciaAqui | Fale' });
});

/* GET Entrar. */
router.get('/entrar', function(req, res, next) {
  res.render('entrar', { title: 'PrevidenciaAqui | Entrar' });
});

/* GET Cadastrar. */
router.get('/cadastrar', function(req, res, next) {
  res.render('cadastrar', { title: 'PrevidenciaAqui | Cadastrar' });
});

module.exports = router;
