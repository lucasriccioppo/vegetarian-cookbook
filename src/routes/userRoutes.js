const express = require('express')
const userRouter = express.Router();
const userController = require('../controllers/userController')

userRouter.post('/', (req, res, next) => {
    userController.createUser(req, res, next)
})

module.exports = userRouter