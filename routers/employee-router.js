const express = require("express");
const employeeController = require("../controllers/employee-controller");
const employee = express.Router();

employee.get("/", employeeController.get);
employee.get("/:id", employeeController.get_by_id);
employee.post("/", employeeController.create);
employee.put("/:id", employeeController.update);
employee.delete("/:id", employeeController.delete);

module.exports = employee;