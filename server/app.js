var express = require('express');
var appLevelMiddleware = require('./middleware/app');
var setupRoutes = require('./routes')
var mongoose = require('mongoose');
mongoose.Promise = require("bluebird");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');


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
    app.use(cors());

    // setup routes
    var router = express.Router;
    app.use('/api', setupRoutes())

    // finally start the server
    app.listen(3000, function () {
        console.log('listening on port 3000');
    });
});

