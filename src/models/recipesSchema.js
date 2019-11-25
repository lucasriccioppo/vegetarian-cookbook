const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const recipesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    images: [String],
    ingredients: {
        type: [String],
        required: true
    },
    //Passos para realizar a receita: 1º: ...., 2º: ....., ...
    preparation: {
        type: [String],
        required: true
    },
    comments: {
        type: ObjectId,
        ref: 'Comment'
    },
    flags: [String]
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipesSchema)