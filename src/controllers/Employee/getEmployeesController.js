const { getEmployeesQuery } = require('../../database/queries/getData');

const getEmployees = (req, res) => {
  getEmployeesQuery()
    .then((data) => {
      return res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: 'server error' }));
};

module.exports = {
  getEmployees,
};
