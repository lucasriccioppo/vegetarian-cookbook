const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // media da nota
    average: Number,
    avatar: String,
    favorites: [{
        type: ObjectId,
        ref: 'Recipe'
    }],
    followers: [{
        type: ObjectId,
        ref: 'User'
    }],
    following: [{
        type: ObjectId,
        ref: 'User'
    }],
}, { timestamps: true })

module.exports = mongoose.model('User', usersSchema)