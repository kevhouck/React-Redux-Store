var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    submittedOn: Date
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
