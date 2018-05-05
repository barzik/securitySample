var express = require('express');
var router = express.Router();

router.get('/csrf', function(req, res, next) {
    res.render('csrf');
});

router.get('/csrf-attack', function(req, res, next) {
    res.render('csrf-attack');
});

router.get('/show-all-params', function(req, res, next) {
    res.render('show-all-params', { allGETParams: req.query, allPOSTParams: req.params });
});



module.exports = router;
