// ./controllers/catController.js implements the routes for 'cats' collection

var mongoose = require('mongoose');
var Cat = require('../models/catmodel');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Cats Home Page');
};

// Get list of all cats.
exports.getCats = function(req, res) {
//console.log("GET CHECK");
  Cat.find({}, function(err, results) {
    if (err) throw err;
    console.log('Cats found!');
    // results = object of all the users
    console.log(results);
    res.set('Access-Control-Allow-Origin','*');
    res.json(results);
  });
};

// Get all data for one cat (by name)
exports.getCatByName = function(req, res) {
  var catID = req.params.id;
  Cat.find(
    { name: catID },
    function(err, results) {
      if (err) throw err;
      console.log('Cat found!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
  });
};

// Handle cat update on PUT (find by name)
exports.updateCat = function(req, res) {
  var catID = req.params.id;
  Cat.findOneAndUpdate(
    { name: catID },
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

// Handle cat create on POST.
exports.createCat = function(req, res) {
  var newcat = new Cat(req.body);
  newcat.save(function(err, cat) {
    if (err) throw err;
    console.log('Cat created!');
    console.log(cat);
    res.set('Access-Control-Allow-Origin','*');
//  res.json({ok: true});
    res.json(cat);
  });
};

// Handle cat delete (find by name)
exports.deleteCat = function(req, res) {
  var catID = req.params.id;
  Cat.findOneAndRemove(
    { name: catID },
    function(err, results) {
      if (err) throw err;
      console.log('Cat deleted!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
    }
  );
};
