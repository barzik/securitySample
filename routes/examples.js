var express = require('express');
var router = express.Router();

router.get('/csrf', function(req, res, next) {
    res.render('examples/csrf');
});

router.get('/csrf-attack', function(req, res, next) {
    res.render('examples/csrf-attack');
});

router.get('/xss', function(req, res, next) {
    res.render('examples/xss', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/show-all-params', function(req, res, next) {
    res.render('examples/show-all-params', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/cookies', function(req, res, next) {
    res.cookie('HTTPOnly', 'some value', { maxAge: 900000, httpOnly: true });
    res.cookie('regularCookie', 'some value', { maxAge: 900000, httpOnly: false });
    res.render('examples/cookies');
});

router.get('/csp', function(req, res, next) {
    res.render('examples/csp', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/csp1', function(req, res, next) {
    res.render('examples/csp1', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/csp2', function(req, res, next) {
    res.render('examples/csp2', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/clickjacking', function(req, res, next) {
    res.render('examples/clickjacking', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/clickjackingd', function(req, res, next) {
    //res.set('Content-Security-Policy', 'frame-ancestors \'none\'');
    //res.set('X-Frame-Options', 'DENY');
    // DONT FORGET THE SHIFT

    res.render('examples/clickjackingd', { allGETParams: req.query, allPOSTParams: req.params });
});

module.exports = router;
