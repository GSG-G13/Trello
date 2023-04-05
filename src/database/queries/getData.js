const { connection } = require('../config/connection');

const getEmployeesQuery = () => {
  const query = "SELECT * FROM employee;";
  return connection.query(query);
};

const getTasksQuery = () => {
  const query = "SELECT * FROM tasks;";
  return connection.query(query);
};

module.exports = {
  getEmployeesQuery,
  getTasksQuery,
};
