var express = require('express');
var userController = require('../controllers/app/user');
var postController = require('../controllers/blog/post');

var createRouter = function () {
    var router = express.Router();

    // user
    router.post('/signup', userController.signup);
    router.post('/login', userController.login);

    // post
    router.get('/post', postController.getMany);
    router.get('/post/:id', postController.getOne);

    return router;

};

module.exports.createRouter = createRouter;
