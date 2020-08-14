const {
  getCategoryById,
  getCategories,
  getCategoriesTotal,
  addCategory,
  updateCategory,
  getCategoriesInList,
  deleteCategory,
} = require('./services/category');

const {
  getProductById,
  getProducts,
  getProductsTotal,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./services/product');

const resolvers = {
  Query: {
    getCategoryById: (_, params) => getCategoryById(params),
    getCategories: (_, params) => getCategories(params),
    getCategoriesTotal: (_, params) => getCategoriesTotal(params),

    getProductById: (_, params) => getProductById(params),
    getProducts: (_, params) => getProducts(params),
    getProductsTotal: (_, params) => getProductsTotal(params),
  },

  Mutation: {
    addCategory: (_, params) => addCategory(params),
    updateCategory: (_, params) => updateCategory(params),
    deleteCategory: (_, params) => deleteCategory(params),

    addProduct: (_, params) => addProduct(params),
    updateProduct: (_, params) => updateProduct(params),
    deleteProduct: (_, params) => deleteProduct(params),
  },

  Product: {
    categories: async ({ categories }) => getCategoriesInList({ categories }),
  },
};

module.exports = resolvers;
