const commentService = require('../services/commentService')
const HttpStatus = require('http-status-codes')

const createComment = async (req, res, next) => {
    const data = req.body

    const comment = {
        recipeId: data.recipeId,
        ownerId: data.ownerId,
        text: data.text,
        grade: data.grade
    }

    try {
        await commentService.createComment(comment)
        res.status(HttpStatus.CREATED).send({ msg: "Comentário criada com sucesso!" })
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao criar comentário: ${err}`)
    }
}

const findCategoriesByRecipe = async (req, res, next) => {
    const options = { recipeId: req.params.recipeId }

    try {
        const comments = await commentService.findComments(options)
        res.status(HttpStatus.OK).send(comments)
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao recuperar receitas: ${err}`)
    }
}

module.exports = {
    createComment,
    findCategoriesByRecipe
}