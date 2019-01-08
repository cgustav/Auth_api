/*----------  Express Module  ----------*/
const express = require('express');
const Router = express.Router();

/*----------  User Data Model  ----------*/
const User = require('../models/User');

/*----------  Passport Module  ----------*/
const passport = require('passport');

/*----------  Export this module  ----------*/
const controller = {};



/*=============================================
=            Route Actions                    =
=============================================*/


/*----------  RENDERING SIGNIN VIEW ----------*/

controller.SignIn = (req, res) => {
    res.render('signin');
}



/*----------  RENDERING SIGNUP VIEW ----------*/

controller.SignUp = (req, res) => {
    res.render('signup');
}



/*----------  USER REGISTRY ----------*/

controller.Registry = async (req, res) => {
    //Array for errorhandling
    let errors = [];
    const { name, birthday, gender, email, password, repassword } = req.body;

    //todo: Server-side validation

    if (password != repassword) {
        errors.push({
            text: 'Passwords do not match.'
        });
    }
    if (password.length < 4) {
        errors.push({
            text: 'Passwords must be at least 4 characters.'
        });
    }
    if (birthday === "") {
        errors.push({
            text: 'You have to put a valid birth date. '
        });
    }
    if (errors.length > 0) {
        res.render('/signup', { name, birthday, gender, email, password, repassword })
    } else {
        //Looking for email coincidence in DB
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            
            // ? using flash
            req.flash('error_msg', 'The Email is already in use');
            res.redirect('/signup');
        } else {
            //Saving a new user on a const
            const newUser = new User({ name, birthday, gender, email, password });
            //Hash
            newUser.password = await newUser.encryptPassword(password);
            //saving new user on mongo
            await newUser.save();
            req.flash('success_msg', 'You are registered!');
            res.redirect('/users/signin');
        }
    }

};




/*----------  USER AUTHENTICATION  ----------*/

controller.Authenticate = (req, res) => {

    passport.authenticate('local',{
        successRedirect: '/notes',
        failureRedirect: '/users/signin',
        failureFlash: true
    })
}




/*----------  USER LOGOUT  ----------*/

controller.LogOut = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out now.');
    res.redirect('/');
}





/*=====  End of Route Actions  ======*/


module.exports = controller;