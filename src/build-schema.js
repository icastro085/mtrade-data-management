const fs = require('fs');
const path = require('path');
const { buildSchema } = require('graphql');

const loadSchema = () => (fs.readFileSync(
  path.join(__dirname, 'schemas/schema.graphql'),
  'utf-8'
));

module.exports = () => buildSchema(loadSchema());
