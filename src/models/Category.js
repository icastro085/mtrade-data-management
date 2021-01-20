const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
 
const Category = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  parentId: ObjectId,
});

module.exports = mongoose.model('Category', Category);
