const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.get("/allEmployees", (req, res) => {
  Employee.find().select({_id: 0, name: 1}).then((allEmployees => {
    res.json(allEmployees)
  }))
})

router.post("/addEmployee", (req, res, next) => {
  if (req.body.age > 50) {
    res.json({ error: true, reason: "age greater than 50" });
  } else {
    // req.body contains name, surname, age and cc number
    Employee.create(req.body).then(_ => {
      res.json({ employeeCreated: true, timestamp: new Date() });
    });
  }
});

module.exports = router;
