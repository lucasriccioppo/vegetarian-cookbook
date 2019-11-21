const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String
}, { timestamp: true })

module.exports = mongoose.model('Category', categoriesSchema)