/*
Test example by The Net Ninja
https://www.youtube.com/watch?v=2oYtk83FZCA
*/

var mocha = require('mocha');
var assert = require('assert');
var Owner = require('../models/ownermodel');

// Describe test
describe('Test for saving new owner.', function(){
        //Create test
        it("New user saved to database", function(done){
            var owner = new Owner({
                fullname:"Matti Meikäläinen",
                city:"Kaupunki",
            });
            owner.save().then(function(){
                assert(owner.isNew === false);
                done();
            }); 
        });
});