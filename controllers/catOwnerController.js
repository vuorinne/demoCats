// Controller for population and handling data between owners and cats.

/*
Notes for controller:
Controller starting at row 27 is not functioning properly.
For some reason when sending data from Postman, controller tries to insert Cat's data to owners model nameslots.
This causes the server crash. On the other controller (Row 56) when the data is hard coded to request, the data goes to DB just fine.




*/

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
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        city: req.body.city 
    });
    newowner.save(function(err) {
        if (err) throw err;

    var newcat = new Cat({
        cName: req.body.cName,
        cAge: req.body.cAge,
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
        first_name: "Matti",
        family_name: "Meikäläinen",
        city: "Tampere"
    });
    newowner.save(function (err) {
        if (err) throw err;
        // Create new cat
        var newcat = new Cat({
            cName: "Kissa",
            cAge: "1",
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

// GET cat information with owner
exports.getCatWithOwner = function(req, res) {
    Cat.findOne({_id: req.params.id}) 
    .populate('cat_owner', 'first_name', 'family_name')
    .exec(function(err, cat) {
        if(err) throw err;
            console.log('Owner of the cat is %s', cat.cat_owner.first_name, cat.cat_owner.family_name); // return undefined but it works!!
            res.json(cat);
        });
    };
