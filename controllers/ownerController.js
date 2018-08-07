// ./controllers/ownerController.js implements the routes for 'owners' collection

var mongoose = require('mongoose');
var Owner = require('../models/ownermodel');
var Cat = require('../models/catmodel');


// Get list of all owners.
exports.getOwners = function(req, res) {
  Owner.find({}, function(err, results) {
    if (err) throw err;
    console.log('Owners found!');
    // results = object of all the users
    console.log(results);
    res.set('Access-Control-Allow-Origin','*');
    res.json(results);
  });
};

// Get all data for one owner (by id)
exports.getOwnerById = function(req, res) {
  Owner.find(
    { _id: req.params.id },
    function(err, results) {
      if (err) throw err;
      console.log('Owner found!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
  });
};

// Handle owner create on POST.
exports.createOwner = function(req, res) {
  var newowner = new Owner(req.body);
  newowner.save(function(err, owner) {
    if (err) throw err;
    console.log('Owner created!');
    console.log(owner);
    res.set('Access-Control-Allow-Origin','*');
    res.json(owner);
  });
};

// GET one owner data WITH cats (by id)
exports.getOwnerWithCat = function(req, res) {
  Owner.findOne({}).populate('cat').exec(function(err, owner) { 
    // Your callback code where you can access subdomain directly through custPhone.subdomain.name 
    if(err) throw err;
    console.log('Owner with cat: ');
    console.log(owner.cat.name);
    res.set('Access-Control-Allow-Origin','*');
    res.json(owner);
    });
};


// Handle owner update on PUT (find by id)
exports.updateOwner = function(req, res) {
  Owner.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new : true },
    function(err, owner) {
      if (err) throw err;
      console.log('Owner updated!');
      console.log(owner);
      res.set('Access-Control-Allow-Origin','*');
      res.json(owner);
    }
  );
};



// Handle owner delete (find by id)
exports.deleteOwner = function(req, res) {
  Owner.findOneAndRemove(
    { _id: req.params.id },
    function(err, results) {
      if (err) throw err;
      console.log('Owner deleted!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
    }
  );
};

/*
Handle owner and cat creation on POST.
With this new owner and cat is created.
The population works on cat and you can see the assigned owner's ID 
in cat's data on the DB.
*/
exports.createOwnerWithCat = function(req, res) {
  var newowner = new Owner({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    family_name: req.body.family_name,
    city: req.body.city 
  });
  newowner.save(function(err) {
    if (err) throw err;

      var newcat = new Cat({
        name: req.body.name,
        age: req.body.age,
        cat_owner: newowner._id
      })

      newcat.save(function(err) {
        if (err) throw err;
      })
    console.log('Owner created!');
    console.log(newowner);
    console.log('Cat created!');
    console.log(newcat);
    res.set('Access-Control-Allow-Origin','*');
    res.json(newowner);
  });
};