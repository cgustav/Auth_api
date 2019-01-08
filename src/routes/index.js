const router = require('express').Router();
const home = require('../controllers/homeController');
const notes = require('../controllers/notesController');
const users = require('../controllers/usersController');

module.exports = app => {

    /*
    We could use this chunk of code to manage the server request/response cycle.
    
    router.get('/', (req,res) =>{
    res.send('index');
    });

    but in long terms this code won't be easily maintainable and escalable.

    so is a better option to use:
    */


    /*----------  Home Routes          ----------*/

    router.get('/', home.Index);
    router.get('/about', home.About);

    /*=====  End of Home Routes         ======*/



    /*----------  Users Routes          ----------*/

    router.get('/signin', users.SignIn);
    router.get('/signup', users.SignUp);
    router.post('/signin', users.Authenticate);
    router.post('/signup', users.Registry);

    /*=====  End of Users Routes             ======*/



    /*----------  Notes Routes          ----------*/

    router.get('/notes', notes.ListAll);
    router.get('/notes/:id', notes.ListOne);
    router.post('/notes/add', notes.AddOne);
    router.put('/notes/:id');
    router.delete('/notes/:id');
    
    

    /*=====  End of Notes Routes             ======*/


    app.use(router);
}


/*
app.use(function (req, res, next) {
    var date = new Date();
    var timestamp = date.getHours() + ":" + date.getMinutes();
    console.log('[' + timestamp + ']', req.method, 'on', req.hostname + ':' + req.socket.localPort + ' to  ' + req.originalUrl);
    next();
});
*/