const Recipe = require('../models/recipesSchema')

const createRecipe = (recipe) => Recipe.create(recipe)

const findRecipes = (options = {}) => Recipe.find(options)

const findRecipeById = (id) => Recipe.findById(id)

const removeRecipeById = (id) => Recipe.findByIdAndRemove(id)

module.exports = {
    createRecipe,
    findRecipes,
    findRecipeById,
    removeRecipeById
}