/*
Test example by The Net Ninja
https://www.youtube.com/watch?v=2oYtk83FZCA
*/

var mocha = require('mocha');
var assert = require('assert');
var Cat = require('../models/catmodel');

// Describe test
describe('Test for saving new cat.', function(){
        //Create test
        it("New cat saved to database", function(done){
            var cat = new Cat({
                cName:"Kissa",
                cAge:"1",
            });
            cat.save().then(function(){
                assert(cat.isNew === false);
                done();
            }); 
        });
});