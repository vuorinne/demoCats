// ./routes/demo.js
// this is a combined router for catsdb collections: cats, owners, ...

var express = require('express');
var router = express.Router();

// Require controller modules.
var owner_controller = require('../controllers/ownerController');
var cat_controller = require('../controllers/catController');
var catOwner_controller = require('../controllers/catOwnerController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//
// CAT ROUTING - separate controller module
//

// GET request for list of all Cat items.
router.get('/cats', cat_controller.getCats);

// POST request for creating Cat.
router.post('/cat', cat_controller.createCat);

// GET request for one Cat by id.
router.get('/cat/:id', cat_controller.getCat); // Remember to uncomment if needed.

// find one cat (by id) and update
// PUT request to find and update Cat.
router.put('/cat/:id', cat_controller.updateCat);

// DELETE request to kill a Cat (by id).
router.delete('/cat/:id', cat_controller.deleteCat);
//
// CAT ROUTING END
//


//
// OWNER ROUTING with separate controller
//

// GET request for list of all Owner items.
router.get('/owners', owner_controller.getOwners);

// GET request for one Owner.
router.get('/owner/:id', owner_controller.getOwnerById);

// find one Owner (by Id) and update
// PUT request to find and update Owner.
router.put('/owner/:id', owner_controller.updateOwner);

// POST request for creating Owner.
// Server crashes if this is enabled with one below.
router.post('/owner', owner_controller.createOwner);

// DELETE request to remove an Owner (by Id).
router.delete('/owner/:id', owner_controller.deleteOwner);

//
// OWNER ROUTING END
//

//
// Router for cats and owners
// Only used when relational data is been handled.
//

//GET request for all Cats with owner.
router.get('/show/cats', catOwner_controller.getCatsWithO);

//GET request for one Cat by id and with owner.
router.get('/show/cat/:id', catOwner_controller.getCatWithOwner);

//GET request for one Owner by id and with cat.
router.get('/show/owner/:id', catOwner_controller.getOwnerWithCat);
//
// CAT & OWNER ROUTING END
//

module.exports = router;
