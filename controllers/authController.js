const UserModel = require('../models/userModel');
const passwordService = require('../services/passwordService');

class AuthController {
    static loginForm(req, res) {
        if (typeof req.session.user === "undefined")
            res.render('auth/entrar');
        else {
            res.redirect("/")
        }
    }

    static async entrar(req, res) {
        try {
            const { usernameOrEmail, password } = req.body;

            const user = await UserModel.findByUsernameOrEmail(usernameOrEmail);

            if (!user) {
                return res.render('auth/entrar', { errorMessage: 'Usuário não encontrado.', usernameOrEmail: usernameOrEmail });
            }

            const isValidPassword = await passwordService.comparePasswords(password, user.password);

            if (!isValidPassword) {
                return res.render('auth/entrar', { errorMessage: 'Senha incorreta.', usernameOrEmail: usernameOrEmail });
            }

            req.session.user = user;

            return res.redirect('/');
        } catch (error) {
            console.log(error);
            return res.status(500).render('error.ejs', { error });
        }
    }

    static logout(req, res) {
        try {
            req.session.use=undefined;
            return res.render('auth/logout');
            
        } catch (error) {
            console.log(error);
            return res.status(500).render('error.ejs', { error });
        }
    }
}

module.exports = AuthController;
