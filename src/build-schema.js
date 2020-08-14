const fs = require('fs');
const path = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

module.exports = () => makeExecutableSchema({
  typeDefs,
  resolvers,
});
