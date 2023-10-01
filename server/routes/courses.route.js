const express = require('express');
const courseRoutes = express.Router();
const { 
    createCourse, 
    updateCourse, 
    deleteCourse, 
    getCourse, 
    getAllCourses 
} = require('../controllers/courses.controllers.js')


//CREATE
courseRoutes.post("/", createCourse);

//UPDATE
courseRoutes.put("/:id", updateCourse);

//DELETE
courseRoutes.delete("/:id", deleteCourse);

//GET
courseRoutes.get("/:id", getCourse);

//GET ALL
courseRoutes.get("/", getAllCourses);

module.exports = { courseRoutes };