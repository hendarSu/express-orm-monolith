const express = require("express");
const { Employee } = require("../models");
const web = express.Router();

web.get("/employee", (req, res) => {
    // 1. Proses Pertama ngejalanin function query builder dari model Employee findAll SELECT "id", "name", "addres", "phone", "email", "status", "createdAt", "updatedAt" FROM "Employees" AS "Employee"
    Employee.findAll().then((data) => {
        // 2. then (proses untuk retun data dari hasil query builder nya.. [employess] array employee)

        // 3. Rendering dari file views/employee.ejs

        // 4. Menyisipkan data array dari employee ke halaman ejs.

        // 5 [di file ejs] di mejalankan embed script javascript yang disisipkan didalam employee.ejs
        res.render("employee", {
            employees: data
        });
    });
});

web.get("/employee/:id", (req, res) => {
    // 1. baca request
    // 2.  run function query builder untuk findOne..
    // Executing (default): SELECT "id", "name", "addres", "phone", "email", "status", "createdAt", "updatedAt" FROM "Employees" AS "Employee" WHERE "Employee"."id" = '8';
    Employee.findOne({
        where : {
            id : req.params.id
        }
    }).then((data) => {

        // 3. return data sekaligus render halama view ejs
         // 4 [di file ejs] di mejalankan embed script javascript yang disisipkan didalam employee.ejs
        res.render("employee-detail", {
            employee: data
        });
    })
});

web.get("/employee-update/:id", (req, res) => {
    Employee.findOne({
        where : {
            id : req.params.id
        }
    }).then((data) => {
        res.render("employee-update", {
            employee: data
        });
    })
})

module.exports = web;