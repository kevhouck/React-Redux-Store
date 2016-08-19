var express = require('express');
var app = express();
var path = require('path');

var runServer = function () {
    // Additional middleware which will set headers that we need on each request.
    app.use(function (req, res, next) {
        // Set permissive CORS header - this allows this server to be used only as
        // an API server in conjunction with something like webpack-dev-server.
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Disable caching so we'll always get the latest comments.
        res.setHeader('Cache-Control', 'no-cache');
        next();
    });

    // serve static assets normally
    app.use(express.static('dist'));

    // handle every other route with index.html, which will contain
    // a script tag to your application's JavaScript file(s).
    app.get('*', function (request, response){
        response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    });


    app.set('port', (process.env.PORT || 5000));

    app.listen(app.get('port'), function () {
        console.log('Server started: http://localhost:' + app.get('port') + '/');
    });
};

module.exports.runServer = runServer;