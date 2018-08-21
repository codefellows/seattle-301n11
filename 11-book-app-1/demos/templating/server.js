'use strict';

const express = require('express');

const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 3000;

// Set the view engine for templating
app.set('view engine', 'ejs');

// Array of groceries for /list route
let groceries = ['apples', 'celery', 'butter', 'milk', 'eggs'];

// Array of quantities for /details route
let quantities = [
  {name: 'apples', quantity: 4},
  {name: 'celery', quantity: 1},
  {name: 'butter', quantity: 1},
  {name: 'milk', quantity: 2},
  {name: 'eggs', quantity: 12},
  {name: 'beans', quantity: 0},
]

// Routes
app.get('/', (request, response) => {
  response.render('index');
});

app.get('/list', (request, response) => {
  response.render('list', {items: groceries});
})

app.get('/details', (request, response) => {
  response.render('details', {items: quantities});
})

// after demonstrating /list and /details separately, refactor list.ejs to use conditional logic
app.get('/list-all', (request, response) => {
  response.render('list', {items: quantities});
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
