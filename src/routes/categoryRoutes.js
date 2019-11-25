const express = require('express')
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController')

categoryRouter.post('/', (req, res, next) => {
    categoryController.createCategory(req, res, next)
})

categoryRouter.get('/', (req, res, next) => {
    categoryController.findCategories(req, res, next)
})

module.exports = categoryRouter