const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    grade: Number
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentsSchema)