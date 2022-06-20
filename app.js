// Import express
const express = require("express");

// Initialize app
const app = express();

// Route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Export app
module.exports = app;