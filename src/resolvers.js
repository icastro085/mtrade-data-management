const {
  getCategoryById,
  getCategories,
  addCategory,
  updateCategory,
  getCategoriesInList,
} = require('./services/category');

const {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
} = require('./services/product');

const resolvers = {
  Query: {
    getCategoryById: (_, params) => getCategoryById(params),
    getCategories: (_, params) => getCategories(params),

    getProductById: (_, params) => getProductById(params),
    getProducts: (_, params) => getProducts(params),
    
  },

  Mutation: {
    addCategory: (_, params) => addCategory(params),
    updateCategory: (_, params) => updateCategory(params),

    addProduct: (_, params) => addProduct(params),
    updateProduct: (_, params) => updateProduct(params),
  },

  Product: {
    categories: async ({ categories }) => getCategoriesInList({ categories }),
  },
};

module.exports = resolvers;
