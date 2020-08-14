const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
 
const Product = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  price: Number,
  priceOld: Number,
  categories: [ObjectId],
  info: [{
    label: String,
    value: String,
  }],
  images: [{
    name: String,
    source: String,
  }]
});

module.exports = mongoose.model('Product', Product);
