"use strict";

const express = require('express');
const router = express.Router();
const child_process = require('child_process')

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

router.get('/command-injection', function(req, res, next) {
    res.render('examples/shellinjection/command-injection');
});

router.get('/command-injection-attack', function(req, res, next) {
    res.render('examples/shellinjection/command-injection-attack');
});

router.post('/command-injection-api', function(req, res, next) {
    child_process.exec(
        'tar cvzf ./public/staticdemofiles/demo.tar ./public/staticdemofiles/' + req.body.file_path,
        function(err, data) {
            if (!err) {
                res.download('./public/staticdemofiles/demo.tar');
            }
        });
});



module.exports = router;
