const fs = require('fs');
const path = require('path');

module.exports = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf-8'
);
