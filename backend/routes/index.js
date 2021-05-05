const router =  require('express').Router();
const portfolio = require('./portfolio');

require('../db/mongoConnection'); //chama a conexao com o banco de dado

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: 'please do not call /api, it is for our server'
    })
});

router.use('/portfolio', portfolio);

module.exports = router;