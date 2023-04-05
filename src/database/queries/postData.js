const { connection } = require('../config/connection');

const addEmployeeQuery = (name, position, email) => {
  const query = {
    text: 'INSERT INTO employee (name,position,email) VALUES ($1,$2,$3) RETURNING *',
    values: [name, position, email],
  };

  return connection.query(query);
};

module.exports = {
    addEmployeeQuery,
};