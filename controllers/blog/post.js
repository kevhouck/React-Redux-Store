var Post = require('../../models/blog/post');

var create = function (req, res) {
    var b = req.body;
    var newPost = new Post({
        title: b.title,
        author: b.author,
        content: b.content,
        submittedOn: new Date()
    });
    newPost.save().then(function (post) {
        res.send(post);
    }).catch(function (err) {
        res.status(400).send(err);
    })
};

var update = function (req, res) {
    var b = req.body;
    var p = req.params;
    Post.findOne({ _id: p.id}, function (err, post) {
        if (err) {
            res.status(404).send('Could not find post with _id');
            return;
        }
        post.title = b.title;
        post.author = b.author;
        post.content = b.content;

        post.save().then(function (post) {
            res.send(post)
        }).catch(function (err) {
            res.status(400).send(err)
        })
    });
};

var getMany = function (req, res) {
    Post.find({})
        .sort('-submittedOn')
        .exec(function (err, posts) {
            if (err) {
                res.status(500);
                return;
            }
            if (!posts) {
                res.status(404).send('Could not find posts');
            }
            res.send(posts);
    })
};

var getOne = function (req, res) {
    var p = req.params;
    Post.findOne({ _id: p.id}, function (err, post) {
        if (err) {
            res.status(500);
            return;
        }
        if (!post) {
            res.status(404).send('Could not find post with _id');
        }
        res.send(post);
    })
};

var deleteOne = function (req, res) {
    var p = req.params;
    Post.findOne({ _id: p.id})
        .exec(function (err, post) {
            if (err) {
                res.set(500);
                return;
            }
            if (!post) {
                res.status(404).send('Could not find post with _id');
            }
            res.send('Deleted post')
        })
};

module.exports = {
    create: create,
    update: update,
    getOne: getOne,
    getMany: getMany,
    deleteOne: deleteOne
};