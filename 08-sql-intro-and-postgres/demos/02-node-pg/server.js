'use strict';

const pg = require('pg');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the client connection to the DB
const connectionString = 'postgres://postgres:postgrespassword@localhost:5432/demos';
const client = new pg.Client(connectionString);
client.connect();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

// DB routes for CRUD operations
app.get('/db/person', (request, response) => {
  client.query('SELECT * FROM persons;')
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      console.error(err);
      response.status(500).send(err);
    });
});

app.post('/db/person', (request, response) => {
  client.query(`
    INSERT INTO persons(name, age, ninja)
    VALUES($1, $2, $3);
    `,
  [
    request.body.name,
    request.body.age,
    request.body.ninja,
  ]
  )
    .then(() => {
      response.redirect('/');
    })
    .catch((err) => {
      console.error(err);
      response.status(500).send(err);
    });
});

createTable();

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


////// Create database table helper function //////
function createTable() {
  client.query(`
    CREATE TABLE IF NOT EXISTS persons(
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      age INTEGER,
      ninja BOOLEAN
    );`
  )
    .then((response) => {
      console.log(response);
    });
}
