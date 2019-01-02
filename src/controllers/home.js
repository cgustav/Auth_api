const express = require('express');
const controller = {};

controller.Index = (req, res) => {
    res.send('Wena Men!!');
}
controller.About = (req, res) => {
    res.send('About Something :)!!');
}
module.exports = controller;
