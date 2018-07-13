// ./controllers/catController.js implements the routes for 'cats' collection

var mongoose = require('mongoose');
var owner = require('../models/ownermodel');
var Cat = require('../models/catmodel');


exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Cats Home Page');
};

// Get list of all cats.                  === tämä ei vaan toimi ===
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

// Get list of all cats with their owner data
exports.getCatsAndOwners = function(req, res) {
  Cat
    .find()
    .populate('Owner', owner)
    .exec(function(err, results) {
      if (err) throw err;
      console.log('Cats with owners found!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
  });
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

/*
EXPERIMENTAL POST method handling
Not working as intented.

//Handle cat create on POST.  
exports.createCat = function(req, res) {
  //creating new owner
  var newowner = owner({
    _id: mongoose.Types.ObjectId(),
    first_name: String,
    family_name: String
  });
    newowner.save(function(err, owner) {
      if (err) throw err;

        var newcat = new Cat({
          name: req.body.name,
          age: req.body.age,
          owner: owner._id
        });

        //Creating new cat
        newcat.save(function(err, cat) {
          if (err) throw err;
          console.log('Cat created!');
          console.log(cat);
          res.set('Access-Control-Allow-Origin','*');
      //  res.json({ok: true});
          res.json(newcat);
        });
  });
}; */


// Get all data for one cat (by id)
exports.getCat = function(req, res) {
  var catID = req.params.id;
  Cat.find(
    { _id: catID },
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
  var catID = req.params.id;
  Cat.findOneAndUpdate(
    { _id: catID },
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
  var catID = req.params.id;
  Cat.findOneAndRemove(
    { _id: catID },
    function(err, results) {
      if (err) throw err;
      console.log('Cat deleted!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
    }
  );
};

// Get all data for one cat (by name)
exports.getCatName = function(req, res) {
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
exports.updateCatName = function(req, res) {
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

// Handle cat delete (find by name)
exports.deleteCatName = function(req, res) {
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
