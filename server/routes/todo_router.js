const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET ROUTE
router.get('/', (req, res) => {
  console.log('GET req to /todo');
  let queryText = 'SELECT * FROM "todos";';
  pool.query(queryText).then(result => {
    console.log(result);
    res.send(result.rows);
  }).catch(error => {
    console.log('error getting todos', error);
    res.sendStatus(500);
  });
});

//POST ROUTE


//DELETE ROUTE


//PUT ROUTE


module.exports = router;