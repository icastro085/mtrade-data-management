const categoryService = require('./services/category');
const productService = require('./services/product');

const rootValue = {
  ...categoryService,
  ...productService,
};

module.exports = () => rootValue;
