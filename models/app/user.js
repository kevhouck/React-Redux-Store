var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Must provide first name']
    },
    lastName: {
        type: String,
        required: [true, 'Must provide last name']
    },
    emailAddress: {
        type: String,
        required: [true, 'Must provide email address'],
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: [true, 'Must provide password']
    },
    createdOn: {
        type: Date,
        required: [true]
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
