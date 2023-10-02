const express = require('express');
const userRoutes = express.Router();
const {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} = require('../controllers/users.controllers.js')

const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken.js')


userRoutes.get("/checkauthentication", verifyToken, ( req, res, next ) => {
    res.send("Hello user you are logged in.")
});


userRoutes.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in & you can delete your account.")
});


userRoutes.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello admin, you are logged in & you can delete all accounts.")
});


//CREATE
// userRoutes.post("/", createUser);

//UPDATE
userRoutes.put("/:id", verifyUser, updateUser);

//DELETE
userRoutes.delete("/:id", verifyUser, deleteUser);

//GET
userRoutes.get("/:id", verifyUser, getUser);

//GET ALL
userRoutes.get("/", verifyAdmin, getAllUsers);

module.exports = { userRoutes };