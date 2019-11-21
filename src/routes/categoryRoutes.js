const express = require('express')
const categoryRouter = express.Router();
const categoryService = require('../services/categorieService')

categoryRouter.post('/create', (req, res) => {
    categoryService.createCategory({name: 'Teste'})
    res.send('OK!')
})

categoryRouter.get('/find', (req, res) => {
    res.send(categoryService.findCategories())
})

module.exports = categoryRouter