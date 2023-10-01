const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./connection/connection');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');

//import routes
const { auth } = require("./middleware/auth.js");
const { userRoutes } = require("./routes/users.route.js");
const { courseRoutes } = require("./routes/courses.route.js");

dotenv.config();

app.use(cors());

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB connection disconnected.");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connection connected.");
});

// middleware routes
app.use(express.json());
app.use("/api/auth", auth);

// routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// error handler
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})



app.listen(port, () => {
    console.log('listening on port ' + port + '........');
})

