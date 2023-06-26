const UserModel = require('../models/userModel');
const { body, validationResult } = require("express-validator");

class UserController {
  static async index(req, res) {
    try {
      const users = await UserModel.findAll();

      return res.render('users/index', { users: users });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;

      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).render('404.ejs');
      }

      return res.render('users/show', { user: user });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async createForm(req, res) {
    return res.render('users/create');
  }

  static async create(req, res) {
    try {

      await body('name')
        .notEmpty()
        .withMessage('O campo "nome" é obrigatório.')
        .trim()
        .isLength({ max: 100 })
        .withMessage('O campo "nome" deve ter no máximo 100 caracteres.')
        .run(req);

      await body('username')
        .notEmpty()
        .withMessage('O campo "apelido" é obrigatório.')
        .trim()
        .isLength({ max: 50 })
        .withMessage('O campo "apelido" deve ter no máximo 50 caracteres.')
        .run(req);

      await body('sex')
        .notEmpty()
        .withMessage('O campo "sexo" é obrigatório.')
        .isIn(['masculino', 'feminino'])
        .withMessage('O campo "sexo" é obrigatório.')
        .run(req); 

        /*await body('birthDate')
        .notEmpty()
        .withMessage('O campo "data de nascimento" é obrigatório.')
        .toDate()
        .isDate()
        .withMessage('O campo "data de nascimento" deve ser uma data válida.')
        .run(req);*/

      await body('email')
        .notEmpty()
        .withMessage('O campo "e-mail" é obrigatório.')
        .trim()
        .isEmail()
        .withMessage('O campo "e-mail" deve ser um endereço de e-mail válido.')
        .run(req);

      await body('password')
        .notEmpty()
        .withMessage('O campo "senha" é obrigatório.')
        .trim()
        .isLength({ min: 6 })
        .withMessage('O campo "senha" deve ter no mínimo 6 caracteres.')
        .run(req);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.flash("error", errors.array()[0].msg);
        return res.redirect("back");
      }
      const { name, username, birthDate, password, email, sex, status } = req.body;

      const user = new UserModel({ name, username, birthDate, password, email, sex, status });



      const insertedUserId = await user.create();

      res.redirect(`/usuarios/exibir/${insertedUserId}`);
    } catch (error) {
      console.log(error);
      const message = "erro ao cadastrar";
      return res.status(500).render('error.ejs', { error: error, message: message });
    }
  }

  static async editForm(req, res) {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).render('404.ejs');
      }

      if (user.birthDate) user.birthDate = new Date(user.birthDate).toISOString().split('T')[0];

      res.render('users/edit', { user: user });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async edit(req, res) {
    try {
      const id = req.params.id;
      const { name, username, birthDate, password, email, sex, status } = req.body;

      const user = new UserModel({ id, name, username, birthDate, password, email, sex, status });

      const result = await user.update();

      if (!result) {
        return res.status(404).render('404.ejs');
      }

      res.redirect(`/usuarios/exibir/${id}`);
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async deleteForm(req, res) {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).render('404.ejs');
      }

      res.render('users/delete', { user: user });
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;

      const user = new UserModel({ id });

      const result = await user.delete();

      if (!result) {
        return res.status(404).render('404.ejs');
      }

      res.redirect('/usuarios');
    } catch (error) {
      return res.status(500).render('error.ejs', { error });
    }
  }

}

module.exports = UserController;