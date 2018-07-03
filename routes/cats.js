// .routes/cats.js
// this is a router/controller for catsdb collection 'cats'

var express = require('express');
var router = express.Router();

//
// CAT ROUTING (and controller)
//
var Cat = require('../models/catmodel');

// GET cats home page.
router.get('/', function(req, res) {
  res.send('NOT IMPLEMENTED: Cats Demo Home Page');
});

//
// GET ALL CATS   -  (SELECT * FROM cat)
router.get('/cats', function (req, res, next) {
//    console.log("GET CHECK");
  Cat.find({}, function(err, results) {
      if (err) throw err;
      console.log('Cats found!');
      // results = object of all the users
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
  });
});

// Get one cat by name
router.get('/cats/:id', function (req, res, next) {
  var catID = req.params.id;
  Cat.find(
    { name: catID },
    function(err, results) {
      if (err) throw err;
      console.log('Cat found!');
      console.log(results);
      res.set('Access-Control-Allow-Origin','*');
      res.json(results);
    }
  );
});

// kill cat by name
router.delete('/cats/:id', function (req, res, next) {
  var catID = req.params.id;
  Cat.findOneAndRemove(
      { name: catID },
      function(err, results) {
        if (err) throw err;
        console.log('Cat deleted!');
        console.log(results);
        res.set('Access-Control-Allow-Origin','*');
        res.json(results);
      }
  );
});

// find one cat (by name) and update
router.put('/cats/:id', function (req, res, next) {
  var catID = req.params.id;
  Cat.findOneAndUpdate(
      { name: catID },
      req.body,
      { new : true },
      function(err, cat) {
        if (err) throw err;
        console.log('Cat updated!');
        console.log(cat);
        res.set('Access-Control-Allow-Origin','*');
        res.json(cat);
      }
  );
});

// create new cat
router.post('/cats', function (req, res, next) {
  var newcat = new Cat(req.body);
  newcat.save(function(err, cat) {
      if (err) throw err;
      console.log('Cat created!');
      console.log(cat);
      res.set('Access-Control-Allow-Origin','*');
      res.json(cat);
  });
});
//
// CAT ROUTING END  ver. 1
//

/*
// Require controller modules.
var cat_controller = require('../controllers/catController');

/// CAT ROUTES only (when separate controller) ///

// GET cats home page.
router.get('/', cat_controller.index);

// GET request for creating a Cat. NOTE This must come before routes that display Cat (uses id).
router.get('/cats/create', cat_controller.cat_create_get);

// POST request for creating Cat.
router.post('/cats/create', cat_controller.cat_create_post);

// GET request to delete Cat.
router.get('/cats/:id/delete', cat_controller.cat_delete_get);

// POST request to delete Cat.
router.post('/cats/:id/delete', cat_controller.cat_delete_post);

// GET request to update Cat.
router.get('/cats/:id/update', cat_controller.cat_update_get);

// POST request to update Cat.
router.post('/cats/:id/update', cat_controller.cat_update_post);

// GET request for one Cat.
router.get('/cats/:id', cat_controller.cat_detail);

// GET request for list of all Cat items.
router.get('/cats', cat_controller.cat_list);
*/

module.exports = router;
