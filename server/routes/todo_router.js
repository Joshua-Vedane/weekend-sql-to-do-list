const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET ROUTE
router.get('/', (req, res) => {
  console.log('GET req to /todo');
  res.sendStatus(200);
})

//POST ROUTE


//DELETE ROUTE


//PUT ROUTE


module.exports = router;