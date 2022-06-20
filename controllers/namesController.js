const express = require("express");
const controller = express.Router();
const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("../utils/stringUtils");

controller.get("/capitalizeName/:name/", (req, res) => {
    try {
        const { name } = req.params;

        const capitalizedName = capitalizeFirstLetter(name);

        res.send(capitalizedName);

    } catch (error) {
        res.send("An error has occurred")
    }
});

controller.get("/:name/:times", (req, res) => {
    try {
        const { name } = req.params;
        const { times } = req.params;

        const repeatedNames = repeatNTimesWithSpace(capitalizeFirstLetter(name), times);

        res.send(repeatedNames);

    } catch (error) {
        res.send("An error has occurred")
    }
});


module.exports = controller;