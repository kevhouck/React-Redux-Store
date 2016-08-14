var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    content: String,
    parentPost: mongoose.Schema.Types.Object,
    submittedBy: mongoose.Schema.Types.ObjectId,
    submittedOn: Date
});

var Comment = mongoose.model('Comment', commentSchema);

exports.module = Comment;