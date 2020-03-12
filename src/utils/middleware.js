const bodyParser = require('body-parser')
const router = require('../routes/routes')
const compression = require('compression')
const cors = require('cors')

const addMiddlewares = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors())
    app.use(compression())
    
    app.use(router)
}

module.exports = { addMiddlewares }