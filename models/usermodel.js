// File: ./models/usermodel.js

//Require Mongoose
var express = require('express');
var mongoose = require('mongoose');

//
// SCHEMA CREATION
//
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// Create schema for collection
var userSchema = new Schema(
    {
    _id: { type: Schema.ObjectId, auto: true },
    
    username: {
        type: String,
        max: 30,
        required: [true, 'No username given.']
    },
    passwd: {
        type: String,
        min: 4,
        required: [true, 'No password given.']     // Better validation coming later
    },
    ownerInfo: {
        type: Schema.Types.ObjectId,
        ref: 'ownermodel'
    },
    catInfo: {
        type: Schema.Types.ObjectId,
        ref: 'catmodel'
    },
    created: { 
        type: Date, 
        default: Date.now, 
        required: true 
    },

    },
    {collection: "usercollection", versionKey: false}
);

// Map schema to collection
var User = mongoose.model('usermodel', userSchema);
module.exports = User;


//
// END SCHEMA CREATION
//
