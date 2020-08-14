const { graphqlHTTP } = require('express-graphql');
const buildSchema = require('../build-schema');

module.exports = graphqlHTTP({
  schema: buildSchema(),
  graphiql: true,
});
