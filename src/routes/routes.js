const express = require('express')
const router = express.Router();
const userRouter = require('./userRoutes')
const categoryRouter = require('./categoryRoutes')
const commentRouter = require('./commentRouter')
const recipeRouter = require('./recipeRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/comment', commentRouter)
router.use('/recipe', recipeRouter)

module.exports = router