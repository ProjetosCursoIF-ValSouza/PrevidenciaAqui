const { poolPrevAqui } = require('../config/database.config');
const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contato.controller');
router.get('/', contatoController.formularioContato);
router.post('/', contatoController.enviarContato);
router.get('/lista', contatoController.index);
router.get('/exibir/:id', contatoController.show);
router.get('/deletar/:id', contatoController.deleteForm);
router.post('/deletar/:id', contatoController.delete);

router.get('/boletim', async (req, res) => {
    try {
        const sql = "SELECT * FROM contato WHERE boletim = 1";
  
        const[rows] = await poolPrevAqui.query(sql);
        return res.render("contato/boletim", {rows});
      } catch (error) {
        console.log(error)
        throw new Error('Erro ao cadastrar o e-mail.');
      }
    }
);

module.exports = router;