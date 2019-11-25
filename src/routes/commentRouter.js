const express = require('express')
const commentRouter = express.Router();
const commentController = require('../controllers/commentController')

commentRouter.post('/', (req, res, next) => {
    commentController.createComment(req, res, next)
})

commentRouter.get('/findByRecipe/:recipeId', (req, res, next) => {
    commentController.findCategoriesByRecipe(req, res, next)
})

module.exports = commentRouter