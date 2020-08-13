const Category = require('../schemas/Category');

// Query
const getCategoryById = async ({ id }) => Category.findById(id);

const getCategories = async ({ limit, page }) => (
  Category.find().limit(limit).skip(limit * page)
);

// Mutation
const addCategory = async ({ category: data }) => {
  const category = new Category(data);
  await category.save();
  return category;
};

module.exports = {
  getCategoryById,
  getCategories,
  addCategory,
};
