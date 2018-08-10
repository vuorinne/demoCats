// Controller for population and handling data between owners and cats.



var mongoose = require('mongoose');
var User = require('../models/usermodel');
var Owner = require('../models/ownermodel');
var Cat = require('../models/catmodel');

/*
Handle owner and cat creation on POST.
With this new owner and cat is created.
The population works on cat and you can see the assigned owner's ID 
in cat's data on the DB.
*/

/*
exports.createOwnerWithCat = function(req, res) {
    var newowner = new Owner({
        _id: new mongoose.Types.ObjectId(),
        fullname: 'Esko Mörkö',
        city: 'Tampere' 
    });
    newowner.save(function(err) {
        if (err) throw err;

    var newcat = new Cat({
        cName: 'Kizza',
        cAge: '4',
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
*/


exports.createOwnerWithCat = function (req, res) {
    var newowner = new Owner({
        _id: new mongoose.Types.ObjectId(),
        fullname: "Esko Mörkö",
        city: "Tampere"
    });
    newowner.save(function (err) {
        if (err) throw err;
        // Create new cat
        var newcat = new Cat({
            cName: "Kisu",
            cAge: "6",
            cat_owner: newowner._id
        })

        newcat.save(function (err) {
            if (err) throw err;
        })
        console.log('Owner created!');
        console.log(newowner);
        console.log('Cat created!');
        console.log(newcat);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(newowner);
    });
};

/*
// GET one owner data WITH cats (by id)
exports.getOwnerWithCat = function (req, res) {
    Owner.findOne({_id: req.params.id})
    .populate('cat', 'cName')
    .exec(function (err, owner) {
        // Callback for getting cat.
        if (err) throw err;
            console.log('Owner with cat %s:', owner.cat.cName);
            res.json(owner);
    });
};
*/

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
    .populate('cat', 'cName')
    .exec(function(err, cat) {
        if(err) throw err;
            console.log('Your cat name is %s', Owner.cat.cName); // return undefined but it works!!
            res.json(cat);
        });
    };
