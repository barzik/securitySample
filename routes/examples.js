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
    res.cookie('HTTPOnly','some value', { maxAge: 900000, httpOnly: true });
    res.cookie('regularCookie','some value', { maxAge: 900000, httpOnly: false });
    res.render('cookies');
});

router.get('/csp', function(req, res, next) {
    res.render('csp', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/csp1', function(req, res, next) {
    res.render('csp1', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/csp2', function(req, res, next) {
    res.render('csp2', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/clickjacking', function(req, res, next) {
    res.render('clickjacking', { allGETParams: req.query, allPOSTParams: req.params });
});

router.get('/clickjackingd', function(req, res, next) {
    //res.set('Content-Security-Policy', 'frame-ancestors \'none\'');
    //res.set('X-Frame-Options', 'DENY');
    // DONT FORGET THE SHIFT
    
    res.render('clickjackingd', { allGETParams: req.query, allPOSTParams: req.params });
});

module.exports = router;
