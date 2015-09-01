var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var Establishment = require('../models/happyhour');

router.get('/username', function(req, res, next){
    console.log("Who dis?" + req.user);
    res.json(req.user);
});

router.post("/happyhour/:zipcode", function(req, res, next){
    return Establishment.find({zipcode: req.params.zipcode}).exec(function(err, info){
        if (err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.put("/flag/:id", function(req, res, next){
    Establishment.findByIdAndUpdate(req.params.id, {flag: !req.body.flag}, function() {
    });
    res.send("Task complete!(zorg zorg)");
});

router.put("/upvote/:id", function(req, res, next){
    Establishment.findByIdAndUpdate(req.params.id, {upvotes: req.body.upvotes}, function() {
    });
    res.send("upvotes posted +1!");
});

router.put("/downvote/:id", function(req, res, next){
    Establishment.findByIdAndUpdate(req.params.id, {downvotes: req.body.downvotes}, function() {
    });
    res.send("downvotes posted +1!");
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