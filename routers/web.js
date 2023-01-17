const express = require("express");
const { Employee } = require("../models");
const web = express.Router();

web.get("/employee", (req, res) => {
    Employee.findAll().then((data) => {
        res.render("employee", {
            employees: data
        });
    })
})

module.exports = web;