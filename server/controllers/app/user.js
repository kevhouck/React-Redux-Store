var User = require('../../models/app/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var signup = function (req, res) {
    var b = req.body;

    if(!b || !b.password) {
        res.sendStatus(400)
        return;
    }

    bcrypt.hash(b.password, 12, function (err, hashedPassword) {
        if (err) {
            res.sendStatus(500)
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
            jwt.sign({ user: user.emailAddress, authLevel: user.authLevel }, 'secret', { algorithm: 'HS512' }, function (err, token) {
                var resObj = {
                    user: user,
                    credentials: token
                };
                res.send(resObj);
            });
        }).catch(function (err) {
            if (err) {
                res.status(400).send(err);
            }});
    })

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
                    res.status(500).send();
                }
                if (result) {
                    jwt.sign({ user: user.emailAddress, authLevel: user.authLevel }, 'secret', { algorithm: 'HS512' }, function (err, token) {
                        var resObj = {
                            user: user,
                            credentials: token
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