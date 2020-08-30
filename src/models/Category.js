const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
 
const Category = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  parent: ObjectId,
});

module.exports = mongoose.model('Category', Category);
