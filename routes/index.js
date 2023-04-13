var express = require('express');
var router = express.Router();

/* GET Noticias. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PrevidenciaAqui | Página Inicial' });
});

router.get('/', function(req, res, next) {
  res.render('pag2', { title: 'PrevidenciaAqui | RegrasPermanetes' });
});


/* GET Sobre. */
router.get('/sobre', function(req, res, next) {
  res.render('Sobre', { title: 'PrevidenciaAqui | Sobre' });
});

/* GET Direitos e Deveres. */
router.get('/direitos', function(req, res, next) {
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
