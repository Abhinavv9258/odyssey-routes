const express = require('express');
const userModel = require("../models/Users.model.js");
const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send("Hello, this is user");
})

module.exports = { userRoutes };