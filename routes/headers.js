"use strict";

const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Headers' });
});


router.get('/csp', function(req, res, next) {
    res.set({ 'Content-Security-Policy': `default-src 'self'` });
    res.render('examples/headers/csp');
});

router.get('/csp-one-domain', function(req, res, next) {
    res.set({ 'Content-Security-Policy': `default-src 'self' *.youtube.com` });
    res.render('examples/headers/csp');
});


router.get('/csp-one-resource', function(req, res, next) {
    res.set({ 'Content-Security-Policy': `default-src 'self'; img-src: https://picsum.photos` });
    res.render('examples/headers/csp');
});

router.get('/csp-hash', function(req, res, next) {
    res.set({ 'Content-Security-Policy': `require-sri-for script` });
    res.render('examples/headers/csp-js');
});

router.get('/no-sniff', function(req, res, next) {
    // res.set({ 'Content-Type': `text/xml` });
    // res.set({ 'X-Content-Type-Options': `nosniff` });
    // res.render('examples/headers/no-sniff');
});




module.exports = router;
