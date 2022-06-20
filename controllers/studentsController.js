const express = require("express");
const controller = express.Router();

const studentData = require("../studentData.json");

controller.get("/", (req, res) => {
    res.json(studentData);
});

controller.get("/:id", (req, res) => {
    let { id } = req.params;

    if (!/0-9/.test(id)) {
        res.send("Student ID must be a number");
    }

    let foundStudent = studentData.students.find((student) => {
        return student.id === id;
        }
    );

    if (foundStudent) {
        res.json(foundStudent);
    } else {
        res.json("Student not found");
    }
});

module.exports = controller;