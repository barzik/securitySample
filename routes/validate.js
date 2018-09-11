"use strict";

const express = require('express');
const router = express.Router();
const validator = require('validator');

router.get('/', function(req, res, next) {
    res.render('examples/validate/index');
});


router.post('/', function(req, res, next) {
    const email = req.body.email;
    let result;

    switch (req.body.method) {
        case 'sanitize':
            result = validator.escape(email); //Not bullet proof sanitizer. 
            res.send(`Sanitized string: ${result}`);
            break;
        case 'validate':
            result = validator.isEmail(email);
            res.send(`Validation results: ${result}`);
            break;
        default:
            res.status(500).send('Something broke!');
    }


});

module.exports = router;
