const router = require('express').Router();
const home = require('../controllers/home');
const notes = require('../controllers/notes');
const users = require('../controllers/users');

module.exports = app => {

    /*
    We could use the following chunk of code to manage server requests and response.
    but in long terms this practice is not easily maintainable and escalable.
    router.get('/', (req,res) =>{
    res.send('index');
    });
    so we will use 
    */
    // A hand-made activity server reporter
    app.use(function (req, res, next) {
        var date = new Date();
        var timestamp = date.getHours() + ":" + date.getMinutes();
        console.log('[' + timestamp + ']', req.method, 'on', req.hostname + ':' + req.socket.localPort + ' to  ' + req.originalUrl);
        next();
    });



    /*----------  Home Routes          ----------*/

    router.get('/', home.Index);
    router.get('/about', home.About);

    /*=====  End of Home Routes         ======*/



    /*----------  Users Routes          ----------*/

    router.get('/signin', users.SignIn);
    router.get('/signup', users.SignUp);

    /*=====  End of Users Routes             ======*/



    /*----------  Notes Routes          ----------*/

    router.get('/notes', notes.ListAll);
    //router.get('/signup', users.SignUp);

    /*=====  End of Notes Routes             ======*/


    app.use(router);
}