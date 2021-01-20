const Category = require('../models/Category');

// Helpers
const mapParent = ({ _id }) => _id;

const mapFilters = (filters = {}) => {
  const { name, parent } = filters;

  const filtersMapped = {};

  if (name) {
    filtersMapped.name = new RegExp(name, 'gi');
  }

  if (parent) {
    filtersMapped.parent = parent;
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
const saveCategory = async ({ id: _id, category }) => {
  category.parent = mapParent(category?.parent);

  return _id
    ? Category.findByIdAndUpdate(_id, category, { new: true, setDefaultsOnInsert: true })
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
