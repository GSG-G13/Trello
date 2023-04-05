const { connection } = require('../config/connection');

const getEmployeesQuery = () => {
  const query = 'SELECT * FROM employee;';
  return connection.query(query);
};


module.exports = {
    getEmployeesQuery
}