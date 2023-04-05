const express = require("express");
const router = express.Router();
const { getEmployees } = require("./Employee");
const { getTasks } = require("./Task");

router.get("/employees", getEmployees);
router.get("/tasks", getTasks);

module.exports = router;
