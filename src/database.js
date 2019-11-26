require('dotenv/config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

var host = process.env.DB_HOST
var port = process.env.DB_PORT
var dbName = process.env.DB_NAME

var connection = `mongodb://${host}:${port}/${dbName}`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}

module.exports = mongoose.connect(connection, options, (error) => {
    if(error) console.log(`Error conection with DB: ${error}`);
});