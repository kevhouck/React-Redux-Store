var Cupcake = require('../../models/store/cupcake');

var create = function (req, res) {
    var b = req.body;
    var cupcake = new Cupcake({
        name: b.name,
        description: b.description,
        price: b.price
    });
    cupcake.save().then(function (cupcake) {
        res.send(cupcake)
    }).catch(function (err) {
        res.status(400).send(err);
    })
};

var update = function (req, res) {
    var b = req.body;
    var p = req.params;
    Cupcake.findOne({_id: p.id}, function (err, cupcake) {
        if (err) {
            res.status(500);
            return;
        }
        if (!cupcake) {
            res.status(404).send('Could not find cupcake with id');
            return;
        }
        cupcake.name = b.name;
        cupcake.description = b.description;
        cupcake.price = b.price;
        cupcake.save().then(function (cupcake) {
            res.send(cupcake)
        }).catch(function (err) {
            res.status(400);
        })
    })
};

var getMany = function (req, res) {
    Cupcake.find({}, function (err, cupcakes) {
        if (err) {
            res.status(500);
            return;
        }
        res.send(cupcakes);
    })
};

var deleteOne = function (req, res) {
    var p = req.params;
    Cupcake.findOne({_id: p.id})
        .exec(function (err, cupcake) {
            if (err) {
                res.status(400);
                return;
            }
            if (!cupcake) {
                res.status(404).send('Could not find cupcake');
                return;
            }
            res.send('Deleted cupcake')
        })
};

module.exports = {
    create: create,
    update: update,
    getMany: getMany,
    deleteOne: deleteOne
};