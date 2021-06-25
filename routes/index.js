const express = require('express');
const router = express.Router();
const ExecutivesModel = require('../models/ExecutivesModel');

router.get('/', async (req, res) => {
    const ceoData = await ExecutivesModel.getAllExecutiveData();
    res.render('template', {
        locals: {
            title: 'CEOS',
            data: ceoData
        },
        partials: {
            body: 'partials/home'
        }
    })
})

module.exports = router;