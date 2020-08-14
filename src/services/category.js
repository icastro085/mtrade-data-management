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
const addCategory = async ({ category: data }) => Category.create(data);

const updateCategory = async ({ id, category: data }) => {
  await Category.updateOne({ _id: id }, data);
  return getCategoryById({ id });
};

module.exports = {
  getCategoryById,
  getCategories,
  addCategory,
  updateCategory,
  getCategoriesInList,
};
