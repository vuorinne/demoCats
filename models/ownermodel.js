// File: ./models/ownermodel.js

//Require Mongoose
var mongoose = require('mongoose');
//
// SCHEMA CREATION
//
var Schema = mongoose.Schema;

// Create schema for each collection
var ownerSchema = new Schema(
  {
    first_name: String,
    family_name: String,
    city: String
  },
  {collection: "ownercollection", versionKey: false}
);

// map schema to collection
var Owner = mongoose.model('ownermodel', ownerSchema);
module.exports = Owner;

// this schema can now be called in other nodejs files
// - var Owner = require('../models/ownermodel');
// - Owner.method(...)
//
// END SCHEMA CREATION
//
