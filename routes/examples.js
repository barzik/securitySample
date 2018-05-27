var express = require('express');
var router = express.Router();

router.get('/csrf', function(req, res, next) {
    res.render('csrf');
});

router.get('/csrf-attack', function(req, res, next) {
    res.render('csrf-attack');
});

router.get('/xss', function(req, res, next) {
    res.render('xss', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/show-all-params', function(req, res, next) {
    res.render('show-all-params', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/cookies', function(req, res, next) {
    res.render('cookies');
});

router.get('/httpcookie', function(req, res, next) {
    res.render('httpcookie');
});



module.exports = router;
