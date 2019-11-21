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
        res.status(HttpStatus.CREATED).send(createdUser)
    } catch(err) {
        res.status(HttpStatus.BAD_REQUEST).send(`Erro ao criar usuário: ${err}`)
    }
}

module.exports = {
    createUser
}