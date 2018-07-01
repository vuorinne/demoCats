// File: ./models/catmodel.js

//Require Mongoose
var mongoose = require('mongoose');
//
// SCHEMA CREATION
//
var Schema = mongoose.Schema;

// Create schema for each collection
var catSchema = new Schema(
  {
    name: String,
    age: Number
  },
  {collection: "catcollection", versionKey: false}
);

// map schema to collection
var Cat = mongoose.model('catmodel', catSchema);
module.exports = Cat;

// this schema can now be called in other nodejs files
// - var Cat = require('../models/catmodel');
// - Cat.method(...)
//
// END SCHEMA CREATION
//
