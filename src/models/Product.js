const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
 
const Product = new Schema({
  id: ObjectId,
  name: String,
  categories: [ObjectId],
});

module.exports = mongoose.model('Product', Product);
