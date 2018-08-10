// ./controllers/catController.js implements the routes for 'cats' collection
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cat = require('../models/catmodel');



// Get list of all cats.
exports.getCats = function(req, res) {
  Cat.find({}, function(err, results) {
    if (err) throw err;
    console.log('Cats found!');
    // results = object of all the cats
    console.log(results);
    res.set('Access-Control-Allow-Origin','*');
    res.json(results);
  });
};

// Handle cat create on POST.
exports.createCat = function(req, res) {
  var newcat = new Cat({name: req.body, owner: newOwner._id});
  newcat.save(function(err, cat) {
    if (err) throw err;
    console.log('Cat created!');
    console.log(cat);
    res.set('Access-Control-Allow-Origin','*');
    //  res.json({ok: true});
    res.json(cat);
});
}; 

// Get all data for one cat (by id)
exports.getCat = function(req, res) {
  Cat.find(
    { _id: req.params.id },
    function(err, results) {
      if (err) throw err;
      console.log('Cat found!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
  });
};


// Handle cat update on PUT (find by id)
exports.updateCat = function(req, res) {
  Cat.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new : true },
    function(err, cat) {
      if (err) throw err;
      console.log('Cat updated!');
      console.log(cat);
      res.set('Access-Control-Allow-Origin','*');
      res.json(cat);
    }
  );
};

// Handle cat delete (find by id)
exports.deleteCat = function(req, res) {
  Cat.findOneAndRemove(
    { _id: req.params.id },
    function(err, results) {
      if (err) throw err;
      console.log('Cat deleted!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
    }
  );
};
