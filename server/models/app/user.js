var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    hashedPassword: {
        type: String,
        required: true
    },
    authLevel: {
        type: String,
        required: true,
        default: 'normal'
    },
    createdOn: {
        type: Date,
        required: true
    }
});

userSchema.options.toJSON = {
    virtuals: true,
    transform: function (doc, ret, options ) {
        ret.id = ret._id
        delete ret._id
        delete ret.hashedPassword
    }
};

var User = mongoose.model('User', userSchema);

module.exports = User;
