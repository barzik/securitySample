"use strict";

const express = require('express');
const router = express.Router();
let log = 1;

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/etag', function(req, res, next) {

    res.append('Last-Modified', (new Date(10000000000)).toUTCString());
    let visit = 'This is your first visit!';
    res.status(200);
    if (req.headers['if-none-match']) {
        log++;
        console.log(log);
        visit = 'You already visited here! number of visits : ' + log;

    }
    res.set({
        'ETag': 'Version' + log,
    })

    res.render('examples/privacy/etag', { visit: visit });
});


module.exports = router;
