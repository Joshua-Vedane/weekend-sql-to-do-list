const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET ROUTE
router.get('/', (req, res) => {
  console.log('GET req to /todos');
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
router.post('/', (req, res) => {
  let newTodo = req.body
  console.log('POST req to /todos');
  let queryText = `INSERT INTO "todos" ("name")
                   VALUES ($1); `;
  pool.query(queryText, [newTodo.name])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.log(`ERROR adding new todo`, error);
      res.sendStatus(500);
    });
});


//DELETE ROUTE
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  console.log('delete route called with id of:', id);
  const queryText = `DELETE FROM "todos" WHERE "id" = $1;`;
  pool.query(queryText, [id])
  .then((result) => {
    res.sendStatus(204);
  }).catch((error) => {
    console.log('ERROR Deleting Todo' , error);
    res.sendStatus(500);
  })
});


//PUT ROUTE


module.exports = router;