const categoryService = require('../services/categoryService')
const HttpStatus = require('http-status-codes')

const createCategory = async (req, res, next) => {
    const data = req.body

    const category = {
        name: data.name,
        image: data.image
    }

    try {
        await categoryService.createCategory(category)
        res.status(HttpStatus.CREATED).send({ msg: "Categoria criada com sucesso!" })
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao criar categoria: ${err}`)
    }
}

const findCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.findCategories()
        res.status(HttpStatus.OK).send(categories)
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao recuperar categorias: ${err}`)
    }
}

module.exports = {
    createCategory,
    findCategories
}