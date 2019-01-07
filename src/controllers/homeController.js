const express = require('express');
const controller = {};

controller.Index = (req, res) => {
    res.render('index');
}

controller.About = (req, res) => {
    res.render('about');
}

module.exports = controller;
