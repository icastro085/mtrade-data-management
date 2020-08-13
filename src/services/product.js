const Product = require('../schemas/Product');

// Query
const getProductById = async ({ id }) => Product.findById(id);

const getProducts = async ({ limit, page }) => (
  Product.find().limit(limit).skip(limit * page)
);

// Mutation
const addProduct = async ({ product: data }) => {
  const product = new Product(data);
  return product.save();
};

const updateProduct = async ({ id, product: data }) => {
  await Product.updateOne({ _id: id }, data);
  return getProductById({ id });
};


module.exports = {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
};
