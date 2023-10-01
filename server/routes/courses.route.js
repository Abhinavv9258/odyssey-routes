const express = require('express');
const courseModel = require("../models/Courses.model.js");
const courseRoutes = express.Router();

//CREATE
courseRoutes.post("/", async (req, res) => {
    const newCourse = new courseModel(req.body);
    try {
        const savedCourse = await newCourse.save();
        console.log(savedCourse);
        res.status(200).json(savedCourse);
    } catch (err) {
        res.status(500).json({ message: err.message }, err);
    }
})

//UPDATE
courseRoutes.put("/:id", async (req, res) => {
    try {
        const updatedCourse = await courseModel.findByIdAndUpdate(
            res.params.id, 
            { $set: req.body }, 
            { new: true }
        );
        console.log(updatedCourse);
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE
//GET
//GET ALL
courseRoutes.get('/', (req, res) => {
    res.send("Hello, this is course");
})

module.exports = { courseRoutes };