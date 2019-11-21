const Recipe = require('../models/recipesSchema')

const createRecipe = (recipe) => Recipe.create(recipe)

const findRecipes = () => Recipe.find()

const findRecipeById = (id) => Recipe.findById(id)

const removeRecipeById = (id) => Recipe.findByIdAndRemove(id)

module.exports = {
    createRecipe,
    findRecipes,
    findRecipeById,
    removeRecipeById
}