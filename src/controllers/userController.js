const userService = require('../services/userService')
const HttpStatus = require('http-status-codes')
const { encryptPassword } = require('../utils/auth')

const createUser = async (req, res, next) => {
    const data = req.body
    
    const user = {
        email: data.email,
        password: encryptPassword(data.password),
        name: data.name,
        lastName: data.lastName,
        avatar: data.avatar
    }

    try {
        const createdUser = await userService.createUser(user)
        res.status(HttpStatus.CREATED).send({ msg: "Usuário criado com sucesso!" })
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao criar usuário: ${err}`)
    }
}

const findUsers = async (req, res, next) => {
    try {
        const users = await userService.findUsers()
        res.status(HttpStatus.OK).send(users)
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao buscar usuários: ${err}`)
    }
}

const removeUser = async (req, res, next) => {
    const id = req.params.id

    try {
        const deletedUser = await userService.removeUserById(id)
        if (deletedUser) {
            res.status(HttpStatus.OK).send({ msg: "Usuário deletado com sucesso!" })
        } else {
            res.status(HttpStatus.BAD_REQUEST).send(`Usuário inexistente`)
        }
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao deletar usuário: ${err}`)
    }
}

module.exports = {
    createUser,
    findUsers,
    removeUser
}