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

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
