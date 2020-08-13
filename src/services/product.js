const Product = require('../schemas/Product');

  // Query
const getProductById = async ({ id }) => Product.findById(id);

const getProducts = async ({ limit, page }) => (
  Product.find().limit(limit).skip(limit * page)
);

  // Mutation
const addProduct = async ({ product: data }) => {
  const product = new Product(data);
  await product.save();
  return product;
};

module.exports = {
  getProductById,
  getProducts,
  addProduct,
};
