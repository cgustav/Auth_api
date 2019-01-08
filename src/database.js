const mongoose = require('mongoose');

//@Mongoose: Stablish connection with MongoDB allowed in the local environment, through this instance of mongoose module with a few custom rules
//We will use a promise to notify the result 
mongoose.connect('mongodb://localhost/notes-db-app',{
useCreateIndex: true,
useNewUrlParser: true
})
.then(db => console.log('DB is connected!'))
.catch(err => console.error(err));