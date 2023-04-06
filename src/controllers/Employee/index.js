const { getEmployees } = require('./getEmployeesController');
const { addEmployeeController } = require('./addEmployeeController');
const { getEmpTaskController } = require('./getEmployeeTaskController');

module.exports = {
  getEmployees,
  addEmployeeController,
  getEmpTaskController,
};
