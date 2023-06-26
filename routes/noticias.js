const express = require('express');
const router = express.Router();

const noticiaController = require('../controllers/noticia');

router.get('/', noticiaController.getAllNoticias);
router.get('/:id', noticiaController.getNoticiaById);


module.exports = router;
