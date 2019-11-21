const Comment = require('../models/commentsSchema')

const createComment = (comment) => Comment.create(comment)

const findComments = () => Comment.find()

const findCommentById = (id) => Comment.findById(id)

const removeCommentById = (id) => Comment.findByIdAndRemove(id)

module.exports = {
    createComment,
    findComments,
    findCommentById,
    removeCommentById
}