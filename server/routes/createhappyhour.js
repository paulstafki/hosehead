var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Establishment = require('../models/happyhour');

router.get('/', function(req, res, next){
    console.log("create happy hour JS 'get' hit!");
    res.sendFile(path.resolve(__dirname, '../views/addhh.html'));
});

router.post('/', function(req,res,next) {
    console.log("post hit, new happy hour created");
    Establishment.create(req.body, function (err, post) {
        if (err)
            next(err);
        else
            res.redirect('/assets/views/routes/landing.html');
    })
});

module.exports = router;