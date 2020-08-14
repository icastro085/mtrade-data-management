const Category = require('../models/Category');

// Query
const getCategoryById = async ({ id }) => Category.findById(id);

const getCategories = async ({ limit, page }) => (
  Category.find().limit(limit).skip(limit * page)
);

const getCategoriesInList = async ({ categories = []}) => (
  Category.find({ _id: { $in: categories }})
);

// Mutation
const addCategory = async ({ category }) => Category.create(category);

const updateCategory = async ({ id, category }) => (
  Category.findByIdAndUpdate(id, category, { new: true })
);

const deleteCategory = async ({ id }) => (
  await Category.deleteOne({ _id: id })
);

module.exports = {
  getCategoryById,
  getCategories,
  addCategory,
  updateCategory,
  getCategoriesInList,
  deleteCategory,
};
