const userModel = require("../models/Users.model.js");

const register = async (req, res, next) => {
    try{
        const 

        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).send("User has been registered!")
    }catch(err){
        next(err);
    }
}

module.exports = { register };
