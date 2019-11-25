const express = require('express')
const recipeRouter = express.Router();
const recipeController = require('../controllers/recipeController')

recipeRouter.post('/', (req, res, next) => {
    recipeController.createRecipe(req, res, next)
})

recipeRouter.get('/', (req, res, next) => {
    recipeController.findRecipes(req, res, next)
})

module.exports = recipeRouter