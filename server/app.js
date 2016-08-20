var express = require('express');
var appLevelMiddleware = require('./middleware/app');
var unsecuredRoutes = require('./routes/unsecured');
var coreRoutes = require('./routes/core');
var adminRoutes = require('./routes/admin');
var mongoose = require('mongoose');
mongoose.Promise = require("bluebird");
var bodyParser = require('body-parser');
var morgan = require('morgan');


// setup db
mongoose.connect('mongodb://localhost/lexies_cupcakes');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// start the app
db.once('open', function() {
    var app = express();

    // setup app level middleware
    app.use(appLevelMiddleware.auth);
    app.use(bodyParser.json()); // parse json request body
    app.use(morgan('combined')); // logging


    // setup unsecured routes
    app.use('/api', unsecuredRoutes.createRouter());

    // setup core routes
    app.use('/api', coreRoutes.createRouter());

    // setup admin routes
    app.use('/admin', adminRoutes.createRouter());

    // finally start the server
    app.listen(3000, function () {
        console.log('listening on port 3000');
    });
});
