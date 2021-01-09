const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo_router');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//routes 
app.use('/todo', todoRouter);

//server static 
app.use(express.static('server/public'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});