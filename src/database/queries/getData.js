const { connection } = require('../config/connection');

const getEmployeesQuery = () => {
  const query = 'SELECT * FROM employee;';
  return connection.query(query);
};

const getTasksQuery = () => {
  const query = 'SELECT * FROM tasks;';
  return connection.query(query);
};

const getEmployeeTasks = () => {
  const query =
    ' select employee.name, employee.position,employee.email,tasks.name,tasks.description  from employee join tasks ON tasks.employee_id = employee.id';
  return connection.query(query);
};

module.exports = {
  getEmployeesQuery,
  getTasksQuery,
  getEmployeeTasks
};
