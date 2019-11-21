require('dotenv/config');
require('./database')
const express = require('express')
const app = express()
const router = require('./routes/routes')
const compression = require('compression')
const cors = require('cors')

const SERVER_PORT = process.env.SERVER_PORT

app.use(router)
app.use(compression())
app.use(cors())

app.listen(SERVER_PORT, function () {
  console.log(`Server running on port ${SERVER_PORT}!`)
})