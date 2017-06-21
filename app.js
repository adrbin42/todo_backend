const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expValidator = require('express-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(expValidator());
app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache');

app.get('/',function(req,res){
  res.render('index',{name:'Adrienne Bing'});
});

app.listen(3000, function(){
  console.log('Running on localhost:3000');
});
