require('dotenv/config');
require('./database')
const express = require('express')
const app = express()
const { addMiddlewares } = require('./utils/middleware')

const SERVER_PORT = process.env.SERVER_PORT

addMiddlewares(app)

app.listen(SERVER_PORT, function () {
  console.log(`Server running on port ${SERVER_PORT}!`)
})