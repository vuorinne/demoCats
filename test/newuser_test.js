var mocha = require('mocha');
var assert = require('assert');
var User = require('../models/usermodel');

// Describe test
describe('Test for saving new user.', function(){
        //Create test
        it("New user with password saved to database", function(done){
            var user = new User({
                username:"Masa1337",
                passwd:"password",

            });
            user.save().then(function(){
                assert(user.isNew === false);
                done();
            }); 
        });
});