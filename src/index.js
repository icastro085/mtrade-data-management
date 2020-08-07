const mongoose = require('mongoose');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const Category = require('./schema/Category');

(async function() {
  try {
    await mongoose.connect('mongodb://mongo:27017/mtrade', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('contected');
  } catch (e) {
    console.log('Error MongoDB:', e.message);
  }
})();

const schema = buildSchema(`
  type Category {
    _id: ID
    name: String!
    parent: ID
  }

  input CategoryInput {
    name: String!
    parent: ID
  }

  type Query {
    getCategoryById(id: ID!): Category
    getCategories(limit: Int!, page: Int = 0): [Category]
  }

  type Mutation {
    addCategory(category: CategoryInput): Category
  }
`);

const root = {
  // Query
  getCategoryById: async ({ id }) => {
    const category = await Category.findById(id);
    return category;
  },

  getCategories: async ({ limit, page }) => {
    const categories = await Category
      .find()
      .limit(limit)
      .skip(limit * page);

    return categories;
  },

  // Mutation
  addCategory: async ({ category: data }) => {
    const category = new Category(data);
    await category.save();
    return category;
  }
};
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
