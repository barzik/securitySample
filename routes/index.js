var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/presentation-geektime-code-2018', function(req, res, next) {
    res.render('presentations/presentation-geektime-code-2018');
});



module.exports = router;
