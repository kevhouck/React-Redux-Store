var express = require('express');
var coreMiddleware = require('./../middleware/core');

var createRouter = function () {
    var router = express.Router();

    router.use(coreMiddleware.auth);

    router.get('/', function (req, res) {
        res.send('Secured Core Routes');
    });

    return router;

};

module.exports.createRouter = createRouter;
