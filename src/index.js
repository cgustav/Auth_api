/**
 *
 * !Turning on the server
 * Is this Express() function a middleware? if that is the case, why?
 * 
 */

const express = require('express');
const config = require('./server/config');

//const db = require('./database');

// @app: We will obtain the application object throu this callback function to set a bunch of features (routes,middlewares, helpers, etc).
const app = config(express());

// @app: We will start to serve this application. The port is whatever is in the [environment variable PORT], or 3000 if there's nothing there.
app.set('port', process.env.PORT || 3000);

// @app: Finally start listen the server and notify my with this callback when the server is on.
app.listen(app.get('port'), () =>{
    console.log('Serve on port: ', app.get('port'));
});

