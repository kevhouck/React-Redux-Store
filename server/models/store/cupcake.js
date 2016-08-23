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

cupcakeSchema.options.toJSON = {
    virtuals: true,
    transform: function (doc, ret, options ) {
        ret.id = ret._id
        delete ret._id
    }
};

var Cupcake = mongoose.model('Cupcake', cupcakeSchema);

module.exports = Cupcake;