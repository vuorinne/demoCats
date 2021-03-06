// File: ./models/catmodel.js

//Require Mongoose
var express = require('express');
var mongoose = require('mongoose');
var owner = require('../models/ownermodel');
//
// SCHEMA CREATION
//
var Schema = mongoose.Schema;

// Create schema for collection
var catSchema = new Schema(
  {
    _id: { type: Schema.ObjectId, auto: true },
    cName: {
      type: String,
      max: 30,
      required: [true, 'No name?']
    },
    cAge: {
      type: Number,
      min: 0,
      max: [25, 'Max age is 25'],
      required: [true, 'No age?']
    },
    cat_owner: {
      type: Schema.Types.ObjectId,
      ref: 'ownermodel'
    },
    created: {
      type: Date,
      default: Date.now,
      required: true
    },
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
