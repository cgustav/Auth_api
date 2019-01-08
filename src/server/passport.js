const passport = require('passport');
const localStrategy =  require('passport-local').Strategy;

const mongoose = require('mongoose');
const User =  require('../models/User');

//passport middleware
passport.use(new localStrategy({
    usernameField: 'email'
},
async (email, password, done) =>{
    //Match email's user
    const user = await User.findOne({email: email});

    //user does not exists:
    if (!user) {
        return done(null, false, {message: 'User not found!'});
    }else{
    //we found something
    const match = await user.matchPassword(password);
    if (match) {
        return done(null, user);
    }else{
        return done(null, false, {message: 'Incorrect password!'});
    }

    }
}
));

//todo: describe this one
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//todo: describe this one too
passport.deserializeUser((id, done) =>{
    User.findById(id,(err,user) => {
        done(err,user);
    });
});