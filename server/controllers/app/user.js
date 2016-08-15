var User = require('../../models/app/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var signup = function (req, res) {
    var b = req.body;

    if (b.password) {
        bcrypt.hash(b.password, 12, function (err, hashedPassword) {
            if (err) {
                res.statusCode(500);
                return;
            }

            var newUser = new User({
                firstName: b.firstName,
                lastName: b.lastName,
                hashedPassword: hashedPassword,
                createdOn: new Date(),
                emailAddress: b.emailAddress
            });
            newUser.save().then(function (user) {
                delete user.hashedPassword;
                res.send(user);
            }).catch(function (err) {
                if (err) {
                    res.status(400).send(err);
                }});
        })
    }
};

var login = function (req, res) {
    var b = req.body;
    User.findOne(function (err, user) {
            if (err) {
                res.status(401).send('Could not find a user with that email and password');
                return;
            }
            bcrypt.compare(b.password, user.hashedPassword, function (err, result) {
                if (err) {
                    res.statusCode(500);
                }
                if (result) {
                    jwt.sign({ user: user.emailAddress, authLevel: user.authLevel }, 'secret', { algorithm: 'HS512' }, function (err, token) {
                        delete user.hashedPassword;
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
        });
};

module.exports.signup = signup;
module.exports.login = login;