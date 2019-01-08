const express = require('express');
const controller = {};


controller.ListAll = (req, res) => {
    res.send('Listing notes from database');
}
controller.ListOne = (req, res) => {
    res.send('Painting just one note');
}
controller.AddOne = (req, res) => {
    res.render('notes/new-note');
}

module.exports = controller;