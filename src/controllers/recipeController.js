const recipeService = require('../services/recipeService')
const HttpStatus = require('http-status-codes')

const createRecipe = async (req, res, next) => {
    const data = req.body

    const recipe = {
        name: data.name,
        owner: data.ownerId,
        images: data.images,
        ingredients: data.ingredients,
        preparation: data.preparation,
        flags: data.flags
    }

    try {
        await recipeService.createRecipe(recipe)
        res.status(HttpStatus.CREATED).send({ msg: "Receita criada com sucesso!" })
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao criar receita: ${err}`)
    }
}

const findRecipes = async (req, res, next) => {
    try {
        const recipes = await recipeService.findRecipes()
        res.status(HttpStatus.OK).send(recipes)
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao recuperar receitas: ${err}`)
    }
}

const findRecipesByUser = async (req, res, next) => {
    const options = { owner: req.params.ownerId }

    try {
        const recipes = await recipeService.findRecipes(options)
        res.status(HttpStatus.OK).send(recipes)
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao recuperar receitas: ${err}`)
    }
}

module.exports = {
    createRecipe,
    findRecipes,
    findRecipesByUser
}