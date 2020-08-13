const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
 
const Category = new Schema({
  id: ObjectId,
  name: String,
  parent: ObjectId,
});

module.exports = mongoose.model('Category', Category);
