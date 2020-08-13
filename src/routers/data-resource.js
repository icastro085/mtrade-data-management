const { graphqlHTTP } = require('express-graphql');

const buildSchema = require('../build-schema');
const rootValue = require('../root-value');

module.exports = graphqlHTTP({
  schema: buildSchema(),
  rootValue: rootValue(),
  graphiql: true,
});
