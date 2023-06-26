const Contato = require('../models/contato.model');
const { body, validationResult } = require("express-validator");
exports.formularioContato = (req, res) => {
    res.render('contato/formularioContato');
};

// Função para lidar com o envio do formulário de contato
exports.enviarContato = async (req, res) => {
  try {
    //Validações
    await body("nome")
    .trim()
    .notEmpty()
    .withMessage("Nome é obrigatório.")
    .bail()
    .isLength({ max: 100})
    .withMessage("Nome deve conter no máximo 100 caracteres.")
    .run(req);

    await body("email")
      .trim()
      .notEmpty()
      .withMessage("E-mail é obrigatório.")
      .bail()
      .isEmail()
      .withMessage("E-mail deve ser um endereço de e-mail válido.")
      .run(req);

    await body("assunto")
      .trim()
      .notEmpty()
      .withMessage("Assunto é obrigatório.")
      .run(req);

    await body("mensagem")
      .trim()
      .notEmpty()
      .withMessage("Mensagem é obrigatória.")
      .run(req);

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      // Tratar erros de validação
      req.flash("error", errors.array()[0].msg);
      return res.redirect("back");
    }

    const { nome, email, assunto, mensagem } = req.body;

    // Cria uma nova instância do contato
    const novoContato = new Contato(nome, email, assunto, mensagem);

    // Cria o contato no banco de dados
    const contatoId = await novoContato.criar();

    res.status(200).json({ message: 'Contato enviado com sucesso!', contatoId });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao enviar o contato.' });
  }
};

exports.index = async (req, res) => {
  try {
    // Obtém todos os contatos do banco de dados
    const contatos = await Contato.listarTodos();

    // Renderiza o template 'contato/index.ejs' com os dados dos contatos
    res.render('contato/index', { contatos });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao exibir a lista de contatos.' });
  }
};

exports.show = async (req, res) => {
    try {
      // Obtém todos os contatos do banco de dados
      const { id } = req.params;
      const contato = await Contato.consultarPorId(id);
  
      // Renderiza o template 'contato/index.ejs' com os dados dos contatos
      res.render('contato/show', { contato });
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao exibir o contato.' });
    }
  };

exports.deleteForm = async (req, res) => {
  try {
    const { id } = req.params;

    // Obter as informações do contato a ser deletado
    const contato = await Contato.consultarPorId(id);

    if (!contato) {
      return res.status(404).json({ error: 'Contato não encontrado.' });
    }

    // Renderizar o template 'contato/delete.ejs' com as informações do contato
    res.render('contato/delete', { contato });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao exibir o formulário de deleção do contato.' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    // Deletar o contato do banco de dados
    await Contato.deletar(id);

    res.status(200).json({ message: 'Contato deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao deletar o contato.' });
  }
};


