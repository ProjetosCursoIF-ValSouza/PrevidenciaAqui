var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);

router.get('/exibir/:id', userController.show);

router.get('/cadastro/', userController.createForm);
router.post('/cadastro/', userController.create);

router.get('/atualizar/:id', userController.editForm);
router.post('/atualizar/:id', userController.edit);

router.get('/deletar/:id', userController.deleteForm);
router.post('/deletar/:id', userController.delete);


module.exports = router;



/* 
// Rota para lidar com a criação de um novo usuário
router.post('/cadastro', function(req, res, next) {
  // Implemente a lógica para criar um novo usuário no banco de dados
  // Use os dados enviados pelo formulário de cadastro para criar um novo registro de usuário
  // ...
  res.redirect('/usuarios'); // Redireciona para a página de listagem de usuários após o cadastro
});


// Rota para lidar com a autenticação do usuário
router.post('/login', function(req, res, next) {
  // Implemente a lógica para autenticar o usuário
  // Verifique as credenciais fornecidas pelo usuário e realize as verificações necessárias
  // ...
  res.redirect('/dashboard'); // Redireciona para a página do painel do usuário após o login
});

// Rota para exibir o perfil do usuário
router.get('/perfil', function(req, res, next) {
  // Implemente a lógica para exibir o perfil do usuário
  // Recupere os dados do usuário do banco de dados e renderize o template de perfil
  // ...
  res.render('perfil');
});

// Rota para atualizar o perfil do usuário
router.post('/perfil', function(req, res, next) {
  // Implemente a lógica para atualizar o perfil do usuário
  // Receba os dados enviados pelo formulário de atualização de perfil e atualize os dados do usuário no banco de dados
  // ...
  res.redirect('/usuarios/perfil'); // Redireciona para a página de perfil após a atualização
}); */
