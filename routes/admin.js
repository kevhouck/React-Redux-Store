var express = require('express');
var adminMiddleware = require('./../middleware/admin');

var createRouter = function () {
    var router = express.Router();

    router.use(adminMiddleware.auth);

    router.get('/', function (req, res) {
        res.send('Secured Core Routes');
    });

    return router;

};

module.exports.createRouter = createRouter;
