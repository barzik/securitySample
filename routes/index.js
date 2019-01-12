var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/presentation-geektime-code-2018', function(req, res, next) {
    res.render('presentations/presentation-geektime-code-2018');
});

router.get('/presentation-meetup-js-il-2018-07', function(req, res, next) {
    res.render('presentations/presentation-meetup-js-il-2018-07');
});


router.get('/presentation-reversim-2018', function(req, res, next) {
    res.render('presentations/presentation-reversim-2018');
});

router.get('/presentation-school-6th-grader-hebrew', function(req, res, next) {
    res.render('presentations/presentation-school-6th-grader-hebrew');
});

router.get('/presentation-wix-south-2018', function(req, res, next) {
    res.render('presentations/presentation-wix-south-2018');
});

router.get('/presentation-outbrain-2019', function(req, res, next) {
    res.render('presentations/presentation-outbrain-2019');
});



module.exports = router;
