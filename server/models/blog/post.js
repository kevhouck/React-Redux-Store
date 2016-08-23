var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    submittedOn: Date
});

postSchema.options.toJSON = {
    virtuals: true,
    transform: function (doc, ret, options ) {
        ret.id = ret._id
        delete ret._id
    }
};

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
