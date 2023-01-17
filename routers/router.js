const express = require("express");
const employee = require("./employee-router");
const router = express.Router();

router.use("/employees", employee);

module.exports = router;