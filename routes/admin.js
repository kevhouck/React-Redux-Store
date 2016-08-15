var express = require('express');
var adminMiddleware = require('./../middleware/admin');
var postController = require('../controllers/blog/post');

var createRouter = function () {
    var router = express.Router();

    router.use(adminMiddleware.auth);

    router.post('/post', postController.create);
    router.put('/post/:id', postController.update);
    router.delete('/post/:id', postController.deleteOne);

    return router;

};

module.exports.createRouter = createRouter;
