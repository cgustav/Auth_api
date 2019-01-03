
/**
 *
 * !Server Configuration for Express (Middleware) Usage
 *
 */

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const router = require('../routes/index');

module.exports = app => {


    /*=============================================
    =            Views & Handlebars Engine        =
    =============================================*/

    // @app: let's concatenate your root directory path (src) with the 'view' (already existing) folder to especify the location of view files container (this because express-handlebars engine functionality) 
    app.set('views', path.join(__dirname, '../views'));


    // @app: Let's create a view engine config. We will set a special property called '.hbs'. And we will put in it this configuration object, (exphbs = express-handlebars with a few custom settings)
    app.engine('.hbs', exphbs({
        //@(exphbs): receive a configuration object with the following params: 
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));

    //@app: now, your view engine by default (via 'view engine' property) is handlebars engine, with all these configurations i made before (specifying .hbs). 
    app.set('view engine', '.hbs');



    /*=====  End of Views  ======*/



    /*=============================================
    =            Middlewares Section              =
    =============================================*/


    //@app: Let's set bunch of middlewares between the client requests and this API functionality to manage the way it process the requests and the way the response take its form.
    //  ?urlenconded = A built-in middleware function in Express.  It parses incoming request with urlencoded payloads{ and is based on body-parser }.
    // ?... Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body.
    // todo @bodyParser.OptionsUrlEncoded.extended = false;
    // ? The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
    app.use(express.urlencoded({ extended: false }));


    //@app: Let's enable PUT, PATCH and DELETE's verbs where the client doesn't support it (in this case for form submittion requests). And We will use a property called _method in the body request to patch (override) this feature
    app.use(methodOverride('_method'));

    //@app: Let's create a new session middleware through this [express-session object instantiation]
    app.use(session({
        //express-session receive a configuration object with the following params:
        secret: 'mysecretapp',
        resave: true,
        saveUninitialized: true
    }));

    //@app: use this middleware for logging all incoming requests
    // ?Morgan is a HTTP request logger middleware for node.js : https://github.com/expressjs/morgan#readme
    app.use(morgan('dev'));

    //

    /*=====  End of Middlewares Section  ======*/



    /*=============================================
    =            Global Variables                 =
    =============================================*/



    /*=====  End of Global Variables  ======*/



    /*=============================================
    =            Routes                           =
    =============================================*/
    //@app: we're giving application object to express.Router() function 
    router(app);
    //@app: let's configure the static files path folder throu the Express build-in middleware  [express.static]
    // ?Express.static()....
    app.use('/public', express.static(path.join(__dirname, '../public')))


    /*=====  End of Routes  ======*/




    /*=============================================
    =            Static Files            =
    =============================================*/



    /*=====  End of Static Files  ======*/



    /*=============================================
    =            Comment Instantiation            =
    =============================================*/



    /*=====  End of Comment Instantiation  ======*/

    //Return settings to serve my app 
    return app;
}