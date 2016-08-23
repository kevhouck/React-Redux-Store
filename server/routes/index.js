var express = require('express');
var adminMiddleware = require('./../middleware/admin');
var userMiddleware = require('./../middleware/user');
var userController = require('../controllers/app/user');
var postController = require('../controllers/blog/post');
var itemController = require('../controllers/store/item');

var setupRoutes = function () {
    var admin = adminMiddleware.auth
    var user = userMiddleware.auth

    var router = express.Router()

    // post
    router.get('/post', postController.getMany);
    router.get('/post/:id', postController.getOne);
    router.post('/post', admin, postController.create);
    router.put('/post/:id', admin, postController.update);
    router.delete('/post/:id', admin, postController.deleteOne);

    // item
    router.get('/item', itemController.getMany);
    router.post('/item', admin, itemController.create);
    router.put('/item/:id', admin, itemController.update);
    router.delete('/item/:id', admin, itemController.deleteOne);

    // user
    router.post('/signup', userController.signup);
    router.post('/login', userController.login);

    return router
};

module.exports = setupRoutes;
