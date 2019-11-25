const userService = require('../services/userService')
const HttpStatus = require('http-status-codes')
const { encryptPassword, verifyPassword } = require('../utils/auth')

const createUser = async (req, res, next) => {
    const data = req.body
    
    const password = encryptPassword(data.password)

    const user = {
        email: data.email,
        password,
        name: data.name,
        lastName: data.lastName,
        avatar: data.avatar
    }

    try {
        await userService.createUser(user)
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

const login = async (req, res, next) => {
    const { email, password } = req.body
    
    try {
        const user = await userService.findForLogin(email)
        if(verifyPassword(password, user.password))
            res.status(HttpStatus.OK).send({ msg: "Logado!" })
        else
            res.status(HttpStatus.BAD_REQUEST).send({ msg: "Email e/ou senha incorretos!" })

    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao fazer login: ${err}`)
    }
}

module.exports = {
    createUser,
    findUsers,
    removeUser,
    login
}