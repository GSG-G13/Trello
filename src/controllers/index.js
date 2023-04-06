const { getEmployees, addEmployeeController } = require('./Employee');
const express = require('express');
const router = express.Router();
const { getTasks,addTasksController } = require('./Task');

router.get('/employees', getEmployees);
router.get('/tasks', getTasks);

router.post('/create', addEmployeeController);

router.post('/create/task',addTasksController);
module.exports = router;
