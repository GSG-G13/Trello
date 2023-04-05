const { getTasksQuery } = require('../../database/queries/getData');

const getTasks = (req, res) => {
  getTasksQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => res.status(500).json({ message: err.message }));
};

module.exports = {
  getTasks,
};
