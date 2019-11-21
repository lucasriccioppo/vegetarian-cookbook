const User = require('../models/usersModel')

const createUser = (user) => User.create(user)

const findUsers = () => User.find()

const findUserById = (id) => User.findById(id)

const removeUserById = (id) => User.findByIdAndRemove(id)

module.exports = {
    createUser,
    findUsers,
    findUserById,
    removeUserById
}