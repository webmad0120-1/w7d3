const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  surname: String,
  age: Number,
  cc: String
});

const Model = mongoose.model('Employee', schemaName);
module.exports = Model;