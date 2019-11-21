require('dotenv/config');
require('./database')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/routes')
const compression = require('compression')
const cors = require('cors')

const SERVER_PORT = process.env.SERVER_PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(compression())
app.use(router)

app.listen(SERVER_PORT, function () {
  console.log(`Server running on port ${SERVER_PORT}!`)
})