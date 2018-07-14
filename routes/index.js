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



module.exports = router;
