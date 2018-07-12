// File: ./models/catmodel.js

//Require Mongoose
var mongoose = require('mongoose');
//
// SCHEMA CREATION
//
var Schema = mongoose.Schema;

/*
This ownerschema is not related any way to ownermodel.js's schema. 
This only creates dummy owner to cat with different ID each time you use same name for an owner.
Better solution has to be made. 
Remember that this works only WHEN YOU CREATE and VIEW THE DATA for cat.
For the time beign we use this temporarily until the better solution is implemented.
*/
var ownerSchema = new Schema(
  {
    fname: {
      type: String
    },
    lname: {
      type: String
    },
    city: {
      type: String
    }
  });

// Create schema for collection
var catSchema = new Schema(
  {
    name: {
      type: String,
      max: 30,
      required: [true, 'No name?']
    },
    age: {
      type: Number,
      min: 0,
      max: [25, 'Max age is 25'],
      required: [true, 'No age?']
    },
    owner: [ownerSchema]
    //owner : { type: Schema.Types.ObjectId, ref: 'Owner' }
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
