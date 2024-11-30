'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

//routes

router.get('/createTables', (req, res) => {
    let models = require('../models');
    models.sequelize.sync().then(() => {
        res.send('tables created!');
    });
});


router.get('/', controller.showHomepage);

router.get('/:page', controller.showPage);

/* router.get('/:page', (req, res) => {
    res.render(req.params.page)
}); */

module.exports = router;