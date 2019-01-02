/**
 *
 * !Starting the server using express
 * Is this Express() function a middleware? if that is the case, why?
 * 
 */

const express = require('express');
const config = require('./server/config');

// @app: return an object given by initializing the express() function with the app object configured in /server/config.js.

const db = require('./database');
const app = config(express());

// @app: whatever is in the [environment variable PORT], or 3000 if there's nothing there.
app.set('port', process.env.PORT || 3000);

// @app: start listen with the specified featured setted before and print the result.
app.listen(app.get('port'), () =>{
    console.log('Serve on port: ', app.get('port'));
});

