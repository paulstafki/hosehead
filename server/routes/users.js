var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("what is this?");
    res.json(req.isAuthenticated());
});

module.exports = router;