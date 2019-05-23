var express = require('express');
var router = express.Router();
var ExpressBrute = require('express-brute');
var store = new ExpressBrute.MemoryStore(); // THIS IS ONLY FOR DEMO, do not use it on prod please
var bruteforce = new ExpressBrute(store, { minWait: 5000 });
/* CSRF addition */
const csurf = require('csurf');
const bodyParser = require('body-parser');
const parseForm = bodyParser.urlencoded({ extended: false })
const csrfProtection = csurf({
    cookie: true
});
/* end of CSRF addition */

router.get('/csrf', function(req, res, next) {
    res.render('examples/csrf/regular/csrf-form');
});

router.post('/csrf-target', function(req, res, next) {
    res.render('examples/csrf/regular/csrf-target', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/csrf-attack', function(req, res, next) {
    res.render('examples/csrf/regular/csrf-attack');
});

router.get('/csrf-defended', csrfProtection, function(req, res, next) {
    res.render('examples/csrf/defended/csrf-form-defended', { token: req.csrfToken() });
});

router.post('/csrf-target-defended', csrfProtection, function(req, res, next) {
    res.render('examples/csrf/defended/csrf-target-defended', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/csrf-attack-on-defended-form', function(req, res, next) {
    res.render('examples/csrf/defended/csrf-attack-on-defended-form');
});

router.get('/xss', function(req, res, next) {
    res.render('examples/xss', { allGETParams: req.query, allPOSTParams: req.body });
});

router.all('/show-all-params', parseForm, csrfProtection, function(req, res, next) {
    res.render('examples/show-all-params', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/cookies', function(req, res, next) {
    res.cookie('HTTPOnly', 'some value', { maxAge: 900000, httpOnly: true });
    res.cookie('regularCookie', 'some value', { maxAge: 900000, httpOnly: false });
    res.render('examples/cookies');
});

router.get('/csp', function(req, res, next) {
    res.render('examples/csp', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/csp1', function(req, res, next) {
    res.render('examples/csp1', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/csp2', function(req, res, next) {
    res.render('examples/csp2', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/csp3', function(req, res, next) {
    res.render('examples/csp3', { allGETParams: req.query, allPOSTParams: req.body });
});


router.get('/clickjacking', function(req, res, next) {
    res.render('examples/clickjacking', { allGETParams: req.query, allPOSTParams: req.body });
});

router.get('/clickjackingd', function(req, res, next) {
    //res.set('Content-Security-Policy', 'frame-ancestors \'none\'');
    // res.set('X-Frame-Options', 'sameorigin');
    // DONT FORGET THE SHIFT

    res.render('examples/clickjackingd', { allGETParams: req.query, allPOSTParams: req.body });
});

router.all('/bruteforce', function(req, res, next) {
    res.render('examples/bruteforce', { allGETParams: req.query, allPOSTParams: req.body });
});

router.all('/bruteforce-protected',
    bruteforce.prevent,
    function(req, res, next) {
        res.render('examples/bruteforce', { allGETParams: req.query, allPOSTParams: req.body });
    });

module.exports = router;
