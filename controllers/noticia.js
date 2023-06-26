const Noticia = require('../models/noticia');

exports.getAllNoticias = async (req, res) => {
    try {
        const noticias = await Noticia.findAll();
        res.render('noticia/index', {noticias:noticias});
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.getNoticiaById = async (req, res) => {
    try {
       const noticia = await Noticia.findById(req.params.id);
    //    const noticia1 = await Noticia.findById(1);

        if (!noticia) {
            res.status(404).json({ error: 'Noticia not found' });
        } else {
            res.render('noticia/exibir', {noticia:noticia/*,noticia1: noticia1*/});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
