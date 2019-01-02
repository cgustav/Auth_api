
/**
 *
 * !Server Configuration for Express (Middleware) Usage
 *
 */

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override'); 
const session = require('express-session');
const router = require('../routes/index');


module.exports = app => {


    /*=============================================
    =            Views & Handlebars Engine        =
    =============================================*/

    // @app: let's concat your root directory path (src) with the 'view' (existing) folder to especify the location of view files (to express-handlebars engine functionality) 
    app.set('views', path.join(__dirname, '../views'));


    // @app: Let's create a view engine configuration. We will set a configuration property called '.hbs'. And we will put in it a configuration object, (exphbs = express-handlebars with a few custom settings)
    app.engine('.hbs', exphbs({
        //@(exphbs): receive a configuration object with the following params: 
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));

    //@app: now, your view engine by default (view engine variable) is handlebars engine, with all configurations i made before (.hbs). 
    app.set('view engine', '.hbs');



    /*=====  End of Views  ======*/



    /*=============================================
    =            Middlewares Section              =
    =============================================*/

   
    //@app: lets set a middleware between the my application requests and my API logic to make a response
    //  ?urlenconded = A built-in middleware function in Express.  It parses incoming request with urlencoded payloads and is based on body-parser.
    // ?... Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body.
    // todo @bodyParser.OptionsUrlEncoded.extended = false;
    // ? The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
    app.use(express.urlencoded({extended:false}));


    //@app: let's enable PUT, PATCH and DELETE's verbs where the client doesn't support it (in this case we will use this middleware for form submittion requests). We will use a _method in the body request to patch (override) this feature
    app.use(methodOverride('_method'));

    //@app: let's create a new session middleware through a [express-session object] with the given options
    app.use(session({
        //express-session receive a configuration object with the following params:
        secret: 'mysecretapp',
        resave: true,
        saveUninitialized:true
    }));
    //

    /*=====  End of Middlewares Section  ======*/



    /*=============================================
    =            Global Variables                 =
    =============================================*/



    /*=====  End of Global Variables  ======*/



    /*=============================================
    =            Routes                           =
    =============================================*/
    router(app);


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