const Category = require('../models/Category');

// Helpers

const mapFilters = (filters = {}) => {
  const { name } = filters;

  const filtersMapped = {};

  if (name) {
    filtersMapped.name = new RegExp(name, 'g');
  }

  return filtersMapped;
};

// Query
const getCategoryById = async ({ id }) => Category.findById(id);

const getCategories = async ({ limit, page, ...filters }) => (
  Category.find(mapFilters(filters)).limit(limit).skip(limit * page)
);

const getCategoriesTotal = async (filters = {}) => (
  Category.find(mapFilters(filters)).countDocuments()
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
  getCategoriesTotal,
  addCategory,
  updateCategory,
  getCategoriesInList,
  deleteCategory,
};
