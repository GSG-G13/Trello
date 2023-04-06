const { connection } = require("../config/connection");

const addEmployeeQuery = (name, position, email) => {
  const query = {
    text: "INSERT INTO employee (name,position,email) VALUES ($1,$2,$3) RETURNING *",
    values: [name, position, email],
  };

  return connection.query(query);
};

const addTasksQuery = (name, description, employee_id) => {
  const query = {
    text: "INSERT INTO tasks (name,description,employee_id) VALUES ($1,$2,$3) RETURNING *",
    values: [name, description, employee_id],
  };
  return connection.query(query);
};

module.exports = {
  addEmployeeQuery,
  addTasksQuery
};
