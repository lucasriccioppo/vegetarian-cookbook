const User = require('../models/usersModel')

const createUser = (user) => User.create(user)

const findUsers = () => User.find()

const findForLogin = (email) => User.findOne({ email }).select('password')

const findUserById = (id) => User.findById(id)

const removeUserById = (id) => User.findByIdAndRemove(id)

module.exports = {
    createUser,
    findUsers,
    findForLogin,
    findUserById,
    removeUserById
}