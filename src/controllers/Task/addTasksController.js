const { addTasksQuery } = require("../../database/queries/postData");

const addTasksController = (req, res) => {
  const { name, description, employee_id } = req.body;


  addTasksQuery(name,description,employee_id)
  .then((data)=>res.redirect('/add_task.html'))
  .catch((err)=>res.status(500).json({
    message: err.message,
  })
  )
};


module.exports={
    addTasksController
}