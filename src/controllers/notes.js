const express = require('express');
const controller = {};

controller.ListAll = (req, res) => {
    res.send('Listing notes from database');
}
/*
controller.SignUp = (req, res) => {
    res.send('Listo para entrar');
}
*/
module.exports = controller;