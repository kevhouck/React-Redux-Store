var jwt = require('jsonwebtoken');

// This file contains all of the middleware used in the app

var authMiddleware = function (req, res, next) {
    var token = req.header('jwt');
    if (!token) {
        req.authLevel = "";
        next();
        return;
    }

        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                res.sendStatus(401);
                return;
            }
            req.authLevel = decoded.authLevel;
            next();
        });
};

module.exports.auth = authMiddleware;