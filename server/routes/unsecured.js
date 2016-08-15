var express = require('express');
var userController = require('../controllers/app/user');
var postController = require('../controllers/blog/post');
var cupcakeController = require('../controllers/store/cupcake');

var createRouter = function () {
    var router = express.Router();

    // user
    router.post('/signup', userController.signup);
    router.post('/login', userController.login);

    // post
    router.get('/post', postController.getMany);
    router.get('/post/:id', postController.getOne);

    // cupcake
    router.get('/cupcake', cupcakeController.getMany);

    return router;

};

module.exports.createRouter = createRouter;
