//require('dotenv/config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

var host = 'localhost'
var port = '27017'
var dbName = 'vegetarian-cookbook-db'

var connection = `mongodb://${host}:${port}/${dbName}`

module.exports = mongoose.connect(connection, {useNewUrlParser: true}, function(error){
    if(error) {
        console.log("Error conection with DB:" + error);
    } else {
        console.log('Connected to database');
    }
});