const Pesquisa = require('../models/searchModel');

exports.search = async (req, res) => {
  try {
    const { query } = req.query;
  

    // Realize a pesquisa usando o modelo Pesquisa
    const resultados = await Pesquisa.pesquisar(query);

    // Renderize o template adequado para exibir os resultados da pesquisa
    res.render('search/index', { resultados});
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao realizar a pesquisa.' });
  }
};
