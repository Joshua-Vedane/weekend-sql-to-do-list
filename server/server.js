const express = require('express');
const bodyParser = require('body-parser');
//add todoRouter
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//use todoRouter

app.use(express.static('server/public'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});