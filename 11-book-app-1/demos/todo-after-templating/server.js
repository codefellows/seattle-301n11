'use strict'

require('dotenv').config();

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Serve static files
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// Note: this is our proof of life for deployment.
// app.get('/', (request, response) => response.send('Testing 1, 2, 3'));

// API Routes
app.get('/tasks', getTasks);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


// HELPER FUNCTIONS

function getTasks(request, response) {
  let SQL = 'SELECT * from tasks;';

  return client.query(SQL)
    .then(results => response.render('index', {results: results.rows}))
    .catch(error => response.render('pages/error-view', {error: error}));
}

// PORT=3000

// Mac:
// DATABASE_URL=postgres://localhost:5432/task_app

// Windows:
// DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/task_app
