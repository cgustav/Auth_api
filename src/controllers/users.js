const express = require('express');
const controller = {};

controller.SignIn = (req, res) => {
    res.send('Listo para registrarse');
}
controller.SignUp = (req, res) => {
    res.send('Listo para entrar');
}
module.exports = controller;