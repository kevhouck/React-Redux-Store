var Item = require('../../models/store/item');

var create = function (req, res) {
    var b = req.body;
    var item = new Item({
        name: b.name,
        description: b.description,
        price: b.price
    });
    item.save().then(function (item) {
        res.send(item)
    }).catch(function (err) {
        res.status(400).send(err);
    })
};

var update = function (req, res) {
    var b = req.body;
    var p = req.params;
    Item.findOne({_id: p.id}, function (err, item) {
        if (err) {
            res.status(500);
            return;
        }
        if (!item) {
            res.status(404).send('Could not find item with id');
            return;
        }
        item.name = b.name;
        item.description = b.description;
        item.price = b.price;
        item.save().then(function (item) {
            res.send(item)
        }).catch(function (err) {
            res.status(400);
        })
    })
};

var getMany = function (req, res) {
    var q = req.query
    if (!q.page) {
        res.status(400).send('Must specify a page value in the query string')
        return
    }

    Item.find({})
        .sort('-name')
        .skip((q.page - 1) * 10) // don't have a large collection so this is okay, otherwise will not scale
        .limit(10)
        .exec(function (err, items) {
        if (err) {
            res.status(500);
            return;
        }
        res.send({
            items: items
        });
    })
};

var deleteOne = function (req, res) {
    var p = req.params;
    Item.findOne({_id: p.id})
        .exec(function (err, item) {
            if (err) {
                res.status(400);
                return;
            }
            if (!item) {
                res.status(404).send('Could not find item');
                return;
            }
            res.send('Deleted item')
        })
};

module.exports = {
    create: create,
    update: update,
    getMany: getMany,
    deleteOne: deleteOne
};