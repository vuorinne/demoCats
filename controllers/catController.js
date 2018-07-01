var Cat = require('../models/catmodel');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Cats Home Page');
};

// Display list of all cats.
exports.cat_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat list');
};

// Display detail page for a specific cat.
exports.cat_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat detail: ' + req.params.id);
};

// Display cat create form on GET.
exports.cat_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat create GET');
};

// Handle cat create on POST.
exports.cat_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat create POST');
};

// Display cat delete form on GET.
exports.cat_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat delete GET');
};

// Handle cat delete on POST.
exports.cat_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat delete POST');
};

// Display cat update form on GET.
exports.cat_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat update GET');
};

// Handle cat update on POST.
exports.cat_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Cat update POST');
};
