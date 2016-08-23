var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
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

itemSchema.options.toJSON = {
    virtuals: true,
    transform: function (doc, ret, options ) {
        ret.id = ret._id
        delete ret._id
    }
};

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;