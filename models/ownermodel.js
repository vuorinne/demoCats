// File: ./models/ownermodel.js

//Require Mongoose
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Cat = require('../models/catmodel');
//
// SCHEMA CREATION
//
var Schema = mongoose.Schema;

// Create schema for collection
var ownerSchema = new Schema(
  {
    _id: { type: Schema.ObjectId, auto: true },
    fullname: {
      type: String, 
      required: true, 
    },
    city: String,
    owners_cat: {
      type: Schema.Types.ObjectId,
      ref: 'catmodel'
    },
    created: { 
      type: Date, 
      default: Date.now, 
      required: true 
    },
  },
  {collection: "ownercollection", versionKey: false}
);

// Virtual for owner's full name
/*
ownerSchema
.virtual('fullname')
.get(function () {
  return this.first_name + ', ' + this.family_name;
});*/

// map schema to collection
var Owner = mongoose.model('ownermodel', ownerSchema);
module.exports = Owner;

// this schema can now be called in other nodejs files
// - var Owner = require('../models/ownermodel');
// - Owner.method(...)
//
// END SCHEMA CREATION
//
