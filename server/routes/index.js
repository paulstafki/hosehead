var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var Establishment = require('../models/happyhour');

//router.get("/happyhour", function(req, res, next){
//    return Establishment.find({}).exec(function(err, info){
//        if (err) throw new Error(err);
//        res.send(JSON.stringify(info));
//    });
//});

router.post("/happyhour/:zipcode", function(req, res, next){
    //var reqZipcode = req.params.zipcode; undid an unneccesary variable declaration
    return Establishment.find({zipcode: req.params.zipcode}).exec(function(err, info){
        if (err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../public/assets/views/index.html'));
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: "/assets/views/routes/landing.html",
        failureRedirect: '/'
    })
);

router.get('/*', function(req, res, next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;