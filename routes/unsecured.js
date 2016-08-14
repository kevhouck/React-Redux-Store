var express = require('express');
var userController = require('../controllers/app/user');

var createRouter = function () {
    var router = express.Router();

    router.post('/signup', userController.signup);
    router.post('/login', userController.login);

    return router;

};

module.exports.createRouter = createRouter;
