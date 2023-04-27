var express = require('express');
var router = express.Router();

const noticiaController = require('../controllers/noticia');

router.get('/', noticiaController.getAllNoticias);
router.get('/:id', noticiaController.getNoticiaById);
////router.post('/tasks', tasksController.createTask);
//router.put('/tasks/:id', tasksController.updateTask);
//router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;