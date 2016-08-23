var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    content: String,
    parentPost: mongoose.Schema.Types.Object,
    submittedBy: mongoose.Schema.Types.ObjectId,
    submittedOn: Date
});

commentSchema.options.toJSON = {
    virtuals: true,
    transform: function (doc, ret, options ) {
        ret.id = ret._id
        delete ret._id
    }
};

var Comment = mongoose.model('Comment', commentSchema);

exports.module = Comment;