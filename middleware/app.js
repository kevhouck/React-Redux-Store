// This file contains all of the middleware used in the app

var authMiddleware = function (req, res, next) {
    // todo implement this based on your auth strategy
    req.authLevel = "";
    next();
};

module.exports.auth = authMiddleware;