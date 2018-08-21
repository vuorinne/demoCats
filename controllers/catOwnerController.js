// Controller for population and handling data between owners and cats.



var mongoose = require('mongoose');
var Owner = require('../models/ownermodel');
var Cat = require('../models/catmodel');


// GET all Cats with Owner name
exports.getCatsWithO = function(req, res) {
  Cat.find({})
  .populate('cat_owner', 'fullname')
  .exec(function(err, cats) {
    if(err) throw err;
        console.log(cats);
        res.json(cats);
  });
};

// GET Cat information with Owner
exports.getCatWithOwner = function(req, res) {
    Cat.findOne({_id: req.params.id})
    .populate('cat_owner', 'fullname')
    .exec(function(err, cat) {
        if(err) throw err;
            console.log('Owner of the cat is %s', cat.cat_owner.fullname); // return undefined but it works!!
            res.json(cat);
        });
    };



/*
Can't populate cat's name.
Crashes the server with error message:
TypeError: Cannot read property 'cName' of undefined

TODO: Fix it.
*/
// GET Owner information with Cat
exports.getOwnerWithCat = function(req, res) {
    Owner.findOne({_id: req.params.id})
    .populate('owners_cat', 'cName')
    .exec(function(err, owner) {
        if(err) throw err;
            console.log('Your cat name is %s', owner.owners_cat.cName); // return undefined but it works!!
            res.json(cat);
        });
    };
