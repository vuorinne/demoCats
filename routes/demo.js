// ./routes/demo.js
// this is a combined router for catsdb collections: cats, owners, ...

var express = require('express');
var router = express.Router();

// Require controller modules.
var owner_controller = require('../controllers/ownerController');
var cat_controller = require('../controllers/catController');
var user_controller = require('../controllers/userController');


//
// CAT ROUTING - separate controller module
//

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

// GET request for one owner with cats.
router.get('/owners/:id/cat', owner_controller.getOwnerWithCat);

// find one Owner (by Id) and update
// PUT request to find and update Owner.
router.put('/owners/:id', owner_controller.updateOwner);

// POST request for creating Owner.
// Server crashes if this is enabled with one below.
//router.post('/owners', owner_controller.createOwner);

// POST request for creating Owner and Cat.
router.post('/owners', owner_controller.createOwnerWithCat);

// DELETE request to remove an Owner (by Id).
router.delete('/owners/:id', owner_controller.deleteOwner);

//
// OWNER ROUTING END
//

//
// USER ROUTING with separate controller
//

// Get request for all Users
router.get('/users', user_controller.getUsers);

// GET request for one User.
router.get('/users/:id', user_controller.getUserById);

// find one User (by Id) and update
// PUT request to find and update User.
router.put('/users/:id', user_controller.updateUser);

// POST request for creating User.
router.post('/users', user_controller.createUser);

// DELETE request to remove an User (by Id).
router.delete('/users/:id', user_controller.deleteUser);


//
// USER ROUTING END
//


//
// Experimental routes
//

//
// EXPERIMENTAL ROUTES END
//

module.exports = router;
