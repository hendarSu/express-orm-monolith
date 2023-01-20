const express = require("express");
const employeeController = require("../controllers/employee-controller");
const employee = express.Router();

employee.get("/", employeeController.get);
employee.get("/:id", employeeController.get_by_id);
employee.post("/", employeeController.create);
employee.post("/:id", employeeController.update);
employee.get("/delete/:id", employeeController.delete);

module.exports = employee;