const express = require('express');
const router = express.Router();
const boletimInformativoController = require('../controllers/boletimInformativo.controller');
router.get('/', boletimInformativoController.formularioCadastro);
router.post('/', boletimInformativoController.cadastrar);
module.exports = router;