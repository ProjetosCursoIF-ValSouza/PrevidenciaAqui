const conexao = require('../config/database.config');

exports.cadastrarEmail = async (email) => {
    try {
        const consulta = 'INSERT INTO boletim_informativo (email) VALUES (?)';
        const [linhas, campos] = await conexao.execute(consulta, [email]);
        console.log(linhas, campos);
        return linhas;
    } catch (err) {
        console.log(err);
        throw err;
    }
};