var express = require('express');
var adminMiddleware = require('./../middleware/admin');
var postController = require('../controllers/blog/post');
var cupcakeController = require('../controllers/store/cupcake');

var createRouter = function () {
    var router = express.Router();

    router.use(adminMiddleware.auth);

    // post
    router.post('/post', postController.create);
    router.put('/post/:id', postController.update);
    router.delete('/post/:id', postController.deleteOne);

    // cupcake
    router.post('/cupcake', cupcakeController.create);
    router.put('/cupcake/:id', cupcakeController.update);
    router.delete('/cupcake/:id', cupcakeController.deleteOne);

    return router;

};

module.exports.createRouter = createRouter;
