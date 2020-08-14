const Product = require('../models/Product');

// Helpers
const mapCategories = (categories = []) => (
  categories.map(({ id }) => id)
);

const mapFilters = (filters = {}) => {
  const {
    name,
    description,
  } = filters;

  const filtersMapped = {};

  if (name) {
    filtersMapped.name = new RegExp(name, 'g');
  }

  if (description) {
    filtersMapped.description = new RegExp(description, 'g');
  }

  return filtersMapped;
};

// Query
const getProductById = async ({ id }) => Product.findById(id);

const getProducts = async ({ limit, page, ...filters }) => (
  Product.find(mapFilters(filters)).limit(limit).skip(limit * page)
);

const getProductsTotal = async (filters = {}) => (
  Product.find(mapFilters(filters)).countDocuments()
);

// Mutation
const addProduct = async ({ product }) => {
  product.categories = mapCategories(product.categories);
  return  Product.create(data);
};

const updateProduct = async ({ id, product }) => {
  product.categories = mapCategories(product.categories);
  return Product.findByIdAndUpdate(id, product, { new: true });
};

const deleteProduct = async ({ id }) => (
  Product.deleteOne({ _id: id })
);

module.exports = {
  getProductById,
  getProducts,
  getProductsTotal,
  addProduct,
  updateProduct,
  deleteProduct,
};
