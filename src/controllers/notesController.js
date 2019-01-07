const express = require('express');
const controller = {};

controller.ListAll = (req, res) => {
    res.send('Listing notes from database');
}
controller.ListOne = (req, res) => {
    res.send('Painting just one note');
}
controller.AddOne = (req, res) => {
    res.send('Creating a new note');
}

module.exports = controller;