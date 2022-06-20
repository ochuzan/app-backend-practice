// Import express
const express = require("express");

// Initialize app
const app = express();

const studentsController = require("./controllers/studentsController");
const namesController = require("./controllers/namesController");

app.use("/students", studentsController);
app.use("/names", namesController);

// Route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Export app
module.exports = app;