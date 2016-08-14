var authMiddleware = function (req, res, next) {
    // todo check if user is admin, normal, or logged out
    if(req.authLevel !== "admin" && req.authLevel !== "normal") {
        res.status(403).send('You must login first');
        return;
    }
    next();
};

module.exports.auth = authMiddleware;