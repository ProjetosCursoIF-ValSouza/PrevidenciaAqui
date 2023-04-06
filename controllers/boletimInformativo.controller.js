const BoletimInformativo = require('../models/boletimInformativo.model');
exports.formularioCadastro = (req, res) => {
    res.render('boletimInformativo/formularioCadastro');
};
exports.cadastrar = async (req, res) => {
    try {
        const email = req.body.email;
        await BoletimInformativo.cadastrarEmail(email);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Ocorreu um erro ao assinar o boletim informativo.');
    }
};