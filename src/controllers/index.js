const { getEmployees, addEmployeeController } = require('./Employee');
const express = require('express');
const router = express.Router();
const { getTasks } = require('./Task');

router.get('/employees', getEmployees);
router.get('/tasks', getTasks);

router.post('/create', addEmployeeController);

module.exports = router;
