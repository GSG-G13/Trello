const express = require("express");
const users = require("./static");
const getDATA = require("../database/queries/getData");

const router = express.Router();

router.get("/users", (req, res) => {
  getDATA()
  .then(data => res.json(data))
  .catch(err => console.log(err))

});

module.exports = router;
