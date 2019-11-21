const express = require('express')
const router = express.Router();
const userRouter = require('./userRoutes')
const categoryRouter = require('./categoryRoutes')
const commentRouter = require('./commentRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/comment', commentRouter)

module.exports = router