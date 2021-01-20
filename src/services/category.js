const Category = require('../models/Category');

// Helpers
const mapFilters = (filters = {}) => {
  const { name, parentId } = filters;

  const filtersMapped = {};

  if (name) {
    filtersMapped.name = new RegExp(name, 'gi');
  }

  if (parentId) {
    filtersMapped.parentId = parentId;
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

// Mutation
const saveCategory = async ({ id, category }) => {
  return id
    ? Category.findByIdAndUpdate(id, category, { new: true, setDefaultsOnInsert: true })
    : Category.create(category);
};

const deleteCategory = async ({ id }) => (
  Category.deleteOne({ _id: id })
);

// Product.categories
const getCategoriesInList = async ({ categories = []}) => (
  Category.find({ _id: { $in: categories }})
);

module.exports = {
  getCategoryById,
  getCategories,
  getCategoriesTotal,
  saveCategory,
  getCategoriesInList,
  deleteCategory,
};
