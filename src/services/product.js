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
const addProduct = async ({ product }) => {
  product.categories = mapCategories(product.categories);
  return  Product.create(data);
};

const updateProduct = async ({ id, product }) => {
  product.categories = mapCategories(product.categories);
  return Product.findByIdAndUpdate(id, product, { new: true });
};

const deleteProduct = async ({ id }) => (
  await Product.deleteOne({ _id: id })
);

module.exports = {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
