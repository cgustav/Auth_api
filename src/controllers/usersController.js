const express = require('express');
const controller = {};

controller.SignIn = (req, res) => {
    res.render('signin');
}
controller.SignUp = (req, res) => {
    res.render('signup');
}
module.exports = controller;