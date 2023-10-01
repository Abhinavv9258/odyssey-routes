const express = require('express');
const userModel = require("../models/Users.model");
const auth = express.Router();
const { register } = require('../controllers/auth.controllers.js')


// register user
auth.post('/register', register);


module.exports = { auth };