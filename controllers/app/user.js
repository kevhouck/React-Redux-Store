var User = require('../../models/app/user');
var jwt = require('jsonwebtoken');

var signup = function (req, res) {
    var b = req.body;

    var newUser = new User({
        firstName: b.firstName,
        lastName: b.lastName,
        password: b.password,
        createdOn: new Date(),
        emailAddress: b.emailAddress
    });
    newUser.save().then(function (user) {
        res.send(user);
    }).catch(function (err) {
        if (err) {
            res.status(400).send(err);
        }});
};

var login = function (req, res) {
    var b = req.body;
    User.where({emailAddress: b.emailAddress})
        .findOne(function (err, user) {
            if (err) {
                res.status(401).send('Could not find a user with that email and password');
                return;
            }
            if (user.password === b.password) {
                jwt.sign({ user: user.emailAddress, authLevel: user.authLevel }, 'secret', { algorithm: 'HS512' }, function (err, token) {
                    var resObj = {
                        user: user,
                        jwt: token
                    };
                    res.send(resObj);
                });
            } else {
                res.status(401).send('Could not find a user with that email and password');
            }
        });
};

module.exports.signup = signup;
module.exports.login = login;