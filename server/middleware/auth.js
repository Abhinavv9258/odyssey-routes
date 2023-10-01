const express = require('express');
// const userModel = require("../models/Users.model");
const auth = express.Router();

auth.get('/', (req, res) => {
    res.send("Hello, this is auth");
})

module.exports = { auth };