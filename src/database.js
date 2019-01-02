const mongoose = require('mongoose');

//@Mongoose: stablish a connection with MongoDB, through this instance of mongoose module with a few custom rules
//and we will use a promise to notify the result 
mongoose.connect('mongodb://localhost/notes-db-app',{
useCreateIndex: true,
useNewUrlParser: true,
useFindAndModify: false
})
.then(db => console.log('DB is connected!'))
.catch(err => console.error(err));