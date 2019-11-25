const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const commentsSchema = new mongoose.Schema({
    // Receita que recebe o comentário
    recipeId: {
        type: ObjectId,
        ref: 'Recipe',
        required: true
    },
    // Quem faz o comentário
    ownerId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    grade: Number
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentsSchema)