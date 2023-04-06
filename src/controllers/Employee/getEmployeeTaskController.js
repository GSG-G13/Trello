const { getEmployeeTasks } = require('../../database/queries/getData');

const getEmpTaskController = (req, res) => {
  getEmployeeTasks()
    .then((data) => res.json(data.rows))
    .catch((err) =>
      res.status(500).json({
        message: err.message,
      })
    );
};

module.exports = {
  getEmpTaskController,
};
