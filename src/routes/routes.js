const express = require('express')
const router = express.Router();
const categoryRouter = require('./categoryRoutes')
const commentRouter = require('./commentRouter')

router.use('/category', categoryRouter)
router.use('/comment', commentRouter)

module.exports = router