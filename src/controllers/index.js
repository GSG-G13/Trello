const {
  getEmployees,
  addEmployeeController,
  getEmpTaskController,
} = require('./Employee');
const express = require('express');
const router = express.Router();
const { getTasks, addTasksController } = require('./Task');

router.get('/employees', getEmployees);
router.get('/tasks', getTasks);

router.post('/create/employee', addEmployeeController);

router.post('/create/task', addTasksController);

router.get('/list/emp/task', getEmpTaskController);

module.exports = router;
