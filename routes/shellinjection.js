"use strict";

const express = require('express');
const router = express.Router();

router.get('/ssjs', function(req, res, next) {
    res.render('examples/shellinjection/ssjs');
});

router.get('/ssjs-attack', function(req, res, next) {
    res.render('examples/shellinjection/ssjs-attack');
});

router.post('/ssjs-api', function(req, res, next) {
    let year;
    eval(`year = (${req.body.year})`);
    const date = new Date();
    const futureAge = 2050 - year;
    res.json(futureAge);
});

module.exports = router;
