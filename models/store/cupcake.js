var mongoose = require('mongoose');

var cupcakeSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String
});

var Cupcake = mongoose.model('Cupcake', cupcakeSchema);

module.exports = Cupcake;