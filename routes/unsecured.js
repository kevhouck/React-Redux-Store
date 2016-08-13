var express = require('express');

var createRouter = function () {
    var router = express.Router();

    router.get('/', function (req, res) {
        res.send('Hello World!');
    });

    return router;

};

module.exports.createRouter = createRouter;
