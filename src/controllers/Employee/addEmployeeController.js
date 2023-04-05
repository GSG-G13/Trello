const { addEmployeeQuery } = require('../../database/queries/postData');

const addEmployeeController = (req, res) => {
  const { name, position, email } = req.body;

  addEmployeeQuery(name, position, email)
    .then((data) => res.status(201).json(data.rows))
    .catch((err) =>
      res.status(500).json({
        Error: true,
        message: err.message,
      })
    );
};

module.exports = {
  addEmployeeController,
};
