var jwt = require('jsonwebtoken');

// This file contains all of the middleware used in the app

var authMiddleware = function (req, res, next) {
    var value = req.header('Authorization');
    if (!value) {
        req.authLevel = "";
        next();
        return;
    }

    const valueArr = value.split(' ');
    if (valueArr.length !== 2) {
        req.authLevel = "";
        next();
        return;
    }

    const token = valueArr[1];
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