// ./routes/demo.js
// this is a combined router for catsdb collections: cats, owners, ...

var express = require('express');
var router = express.Router();

// Require controller modules.
var owner_controller = require('../controllers/ownerController');
var cat_controller = require('../controllers/catController');
//
// CAT ROUTING - separate controller module
//
//var Cat = require('../models/catmodel');  moved to controller

// GET cats home page.
router.get('/', cat_controller.index);

// GET request for list of all Cat items.
router.get('/cats', cat_controller.getCats);

// POST request for creating Cat.
router.post('/cats', cat_controller.createCat);

// GET request for one Cat by id.
router.get('/cats/:id', cat_controller.getCat);

// find one cat (by id) and update
// PUT request to find and update Cat.
router.put('/cats/:id', cat_controller.updateCat);

// DELETE request to kill a Cat (by id).
router.delete('/cats/:id', cat_controller.deleteCat);

// versions by name for testing

// GET request for one Cat by name.
router.get('/catn/:id', cat_controller.getCatName);

// find one cat (by name) and update
// PUT request to find and update Cat.
router.put('/catn/:id', cat_controller.updateCatName);

// DELETE request to kill a Cat (by name).
router.delete('/catn/:id', cat_controller.deleteCatName);


// SPECIAL: list of cats AND their owners
//
router.get('/cats_owners', cat_controller.getCatsAndOwners);

//
// CAT ROUTING END
//
//
// OWNER ROUTING with separate controller
//
// GET request for list of all Owner items.
router.get('/owners', owner_controller.getOwners);

// GET request for one Owner.
router.get('/owners/:id', owner_controller.getOwnerById);

// find one Owner (by Id) and update
// PUT request to find and update Owner.
router.put('/owners/:id', owner_controller.updateOwner);

// POST request for creating Owner.
router.post('/owners', owner_controller.createOwner);

// DELETE request to remove an Owner (by Id).
router.delete('/owners/:id', owner_controller.deleteOwner);

//
// OWNER ROUTING END
//

module.exports = router;
