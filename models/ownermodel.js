// File: ./models/ownermodel.js

//Require Mongoose
var mongoose = require('mongoose');
//
// SCHEMA CREATION
//
var Schema = mongoose.Schema;

// Create schema for collection
var ownerSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 30},
    family_name: {type: String, required: true, max: 30},
    city: String
  },
  {collection: "ownercollection", versionKey: false}
);

// Virtual for owner's full name
ownerSchema
.virtual('fullname')
.get(function () {
  return this.first_name + ', ' + this.family_name;
});

// map schema to collection
var Owner = mongoose.model('ownermodel', ownerSchema);
module.exports = Owner;

// this schema can now be called in other nodejs files
// - var Owner = require('../models/ownermodel');
// - Owner.method(...)
//
// END SCHEMA CREATION
//
