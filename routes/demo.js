// ./routes/demo.js
// this is a combined router for catsdb collections: cats, owners, ...

var express = require('express');
var router = express.Router();

// Require controller modules.
var cat_controller = require('../controllers/catController');
var owner_controller = require('../controllers/ownerController');
//
// CAT ROUTING - separate controller module
//
//var Cat = require('../models/catmodel');  moved to controller

// GET cats home page.
router.get('/', cat_controller.index);

// GET request for list of all Cat items.
router.get('/cats', cat_controller.getCats);

// GET request for one Cat.
router.get('/cats/:id', cat_controller.getCatByName);

// find one cat (by name) and update
// PUT request to find and update Cat.
router.put('/cats/:id', cat_controller.updateCat);

// POST request for creating Cat.
router.post('/cats', cat_controller.createCat);

// DELETE request to kill a Cat (by name).
router.delete('/cats/:id', cat_controller.deleteCat);

//
// CAT ROUTING END
//
// needed: list of cats AND their owners
//
// router.get('/cats_owners',cat_controller.getCatsAndOwners);
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
