// ./controllers/ownerController.js implements the routes for 'owners' collection

var mongoose = require('mongoose');
var User = require('../models/usermodel');


// GET list of all users.
exports.getUsers = function(req, res) {
    User.find({}, function(err, results) {
        if (err) throw err;
            console.log('User found');
            console.log(results);
            res.set('Access-Control-Allow-Origin','*');
            res.json(results);
    });
};

// GET  data for one user (by id)
exports.getUserById = function(req, res) {
    User.findById(req.params.id, function(err, results) {
        if(err) throw err;
            console.log('User found!');
            console.log(results);
            res.set('Access-Control-Allow-Origin','*');
            res.json(results);
    });
};

// Handle owner update on PUT (find by id)
exports.updateUser = function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        if(err) throw err;
            console.log('User updated!');
            console.log(user);
            res.set('Access-Control-Allow-Origin','*');
            res.json(user);
    })
};

// Handle owner create on POST.
exports.createUser = function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
        if(err) throw err;
            console.log('Owner created!');
            console.log(user);
            res.set('Access-Control-Allow-Origin','*');
            res.json(user);
    });
};

// Handle owner DELETE (find by id)
exports.deleteUser = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, results) {
        if(err) throw err;
            console.log('User deleted!');
            console.log(results);
            res.set('Access-Control-Allow-Origin','*');
            res.json(results);
    })
};

