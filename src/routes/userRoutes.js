const express = require('express')
const userRouter = express.Router();
const userController = require('../controllers/userController')

userRouter.post('/', (req, res, next) => {
    userController.createUser(req, res, next)
})

userRouter.get('/', (req, res, next) => {
    userController.findUsers(req, res, next)
})

userRouter.delete('/:id', (req, res, next) => {
    userController.removeUser(req, res, next)
})

module.exports = userRouter