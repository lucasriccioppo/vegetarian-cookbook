const Category = require('../models/categoriesSchema')

const createCategory = (category) => Category.create(category)

const findCategories = () => Category.find()

const findCategoryById = (id) => Category.findById(id)

const removeCategoryById = (id) => Category.findByIdAndRemove(id)

module.exports = {
    createCategory,
    findCategories,
    findCategoryById,
    removeCategoryById
}