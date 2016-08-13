var express = require('express');
var appLevelMiddleware = require('./middleware/app');
var unsecuredRoutes = require('./routes/unsecured');
var coreRoutes = require('./routes/core');
var adminRoutes = require('./routes/admin');
var app = express();


// setup app level middleware
app.use(appLevelMiddleware.auth);

// setup unsecured routes
app.use('/unsecured', unsecuredRoutes.createRouter());

// setup core routes
app.use('/api', coreRoutes.createRouter());

// setup admin routes
app.use('/admin', adminRoutes.createRouter());

// finally start the server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});