const Product = require('../models/Product');

// Helpers
const mapCategories = (categories = []) => (
  categories.map(({ id }) => id)
);

// Query
const getProductById = async ({ id }) => Product.findById(id);

const getProducts = async ({ limit, page }) => (
  Product.find().limit(limit).skip(limit * page)
);

// Mutation
const addProduct = async ({ product: data }) => {
  data.categories = mapCategories(data.categories);
  return  Product.create(data);
};

const updateProduct = async ({ id, product: data }) => {
  data.categories = mapCategories(data.categories);
  await Product.updateOne({ _id: id }, data);
  return getProductById({ id });
};

module.exports = {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
};
