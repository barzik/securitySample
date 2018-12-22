"use strict";

const express = require('express');
const router = express.Router();



const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
createDB(db); // Create inmemory DB

router.all('/sqlinjection', function(req, res, next) {
    let results = '';
    const username = req.body['username'];
    const password = req.body['password'];
    if (username) {
        const query = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}";`
        db.get(query, [], (err, row) => {
            if (err) {
                throw err;
            }
            if (row) {
                results = "approved!";
            }
            else {
                results = "YOU SHALL NOT PASS!";
            }
            res.render('examples/sqlinjection/sqlinjection', { allGETParams: req.query, allPOSTParams: req.body, results, query });
        });
    }
    else {
        res.render('examples/sqlinjection/sqlinjection', { allGETParams: req.query, allPOSTParams: req.body });
    }
});

router.get('/sqlinjection-attack', function(req, res, next) {
    res.render('examples/sqlinjection/sqlinjection-attack');
});


module.exports = router;

/*
Creating the SQLiteDB with mock values. 
*/
function createDB(db) {
    db.serialize(function() {
        db.run('CREATE TABLE users (username TEXT, password TEXT)');
        db.run('INSERT INTO users (username, password) VALUES ("admin", "123456")');
        db.run('INSERT INTO users (username, password) VALUES ("user1", "password")');
        db.run('INSERT INTO users (username, password) VALUES ("user2", "qwerty")');
    })
}
