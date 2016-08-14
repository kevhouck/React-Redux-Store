var User = require('../../models/app/user');

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
                res.send(user);
            } else {
                res.status(401).send('Could not find a user with that email and password');
            }
        });
};

module.exports.signup = signup;
module.exports.login = login;