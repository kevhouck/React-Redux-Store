var mongoose = require('mongoose');

var cupcakeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

var Cupcake = mongoose.model('Cupcake', cupcakeSchema);

module.exports = Cupcake;