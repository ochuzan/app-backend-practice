// Import express
const express = require("express");

// Initialize app
const app = express();

const studentsController = require("./controllers/studentsController");

app.use("/students", studentsController);

// Route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Export app
module.exports = app;