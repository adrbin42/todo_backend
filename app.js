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
  res.render('index');
});

let todoItems = [];

let i;
let listItem = "";

app.post('/', function(req,res){
  todoItems.push(req.body.todoListItem);
  res.redirect('/todo');
});

app.get('/todo', function(req,res){
  res.render('completelist', {todoItems: todoItems});
});

app.post('/strikethrough', function(req,res){
  
});

app.listen(3000, function(){
  console.log('Running on localhost:3000');
});

// var newToDo = document.querySelector('.new-todo');
// var todo_list = document.querySelector('.todo-list');
//
// newToDo.addEventListener('keypress', addToDo);
//
// function addToDo(event){
//   if(event.keyCode == 13){
//     var elemTarget = event.target;
//     var listContent = elemTarget.value;
//     elemTarget.value = "";
//
//     var textContent = '<li><div class="view"><label>' + listContent + '</label></div></li>';
//     var newToDoItem = todo_list.insertAdjacentHTML('beforeend', textContent);
//
