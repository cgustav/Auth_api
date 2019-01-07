const router = require('express').Router();
const home = require('../controllers/homeController');
const notes = require('../controllers/notesController');
const users = require('../controllers/usersController');

module.exports = app => {

    /*
    We could this chunk of code to manage server requests and response.
    
    router.get('/', (req,res) =>{
    res.send('index');
    });

    but in long terms this practice is not easily maintainable and escalable.

    so we will use 
    */


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
    router.get('/notes/:id', notes.ListOne);
    router.post('/notes/add', notes.AddOne);
    router.put('/notes/:id');
    router.delete('/notes/:id');
    
    

    /*=====  End of Notes Routes             ======*/


    app.use(router);
}

/*
    // A hand-made activity server reporter
/*
app.use(function (req, res, next) {
    var date = new Date();
    var timestamp = date.getHours() + ":" + date.getMinutes();
    console.log('[' + timestamp + ']', req.method, 'on', req.hostname + ':' + req.socket.localPort + ' to  ' + req.originalUrl);
    next();
});
*/