'use strict';

require('dotenv').config();

// Application Dependencies
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Application Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
app.get('/books', getBooks);
app.get('/books/new', newBook);
app.get('/searches/new', newSearch);
app.get('/books/:id', getBook);
app.post('/books', createBook);
app.post('/searches', createSearch);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


// HELPER FUNCTIONS
function getBooks(request, response) {
  let SQL = 'SELECT * FROM books;';

  return client.query(SQL)
    .then(results => response.render('index', {books: results.rows}))
    .catch(err => handleError(err, response));
}

function newBook(request, response) {
  response.render('pages/books/new');
}

function newSearch(request, response) {
  response.render('pages/searches/new');
}

function getBook(request, response) {
  let SQL = 'SELECT * FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(result => response.render('pages/books/show', {book: result.rows[0], message: ''}))
    .catch(err => handleError(err, response));
}

function createBook(request, response) {
  let {title, author, isbn, image_url, description} = request.body;
  let SQL = 'INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5);';
  let values = [title, author, isbn, image_url, description];

  return client.query(SQL, values)
    .then(() => {
      SQL = 'SELECT * FROM books WHERE isbn=$1;';
      values = [request.body.isbn];
      return client.query(SQL, values)
        .then(result => response.render('pages/books/show', {book: result.rows[0], message: 'This book has been added to your database!'}))
        .catch(handleError);
    })
    .catch(err => handleError(err, response));
}

function createSearch(request, response) {
  let url = 'https://www.googleapis.com/books/v1/volumes';
  let query = '';

  let modifiedRequest = request.body.search[0].split(' ').join('+');

  if (request.body.search[1] === 'title') query += `+intitle:${modifiedRequest}`;
  if (request.body.search[1] === 'author') query += `+inauthor:${modifiedRequest}`;

  superagent.get(url)
    .query({'q': query})
    .then(apiResponse => apiResponse.body.items.map(bookResult => {
      let { title, subtitle, authors, industryIdentifiers, imageLinks, description } = bookResult.volumeInfo;

      let placeholderImage = 'http://www.newyorkpaddy.com/images/covers/NoCoverAvailable.jpg';

      return {
        title: title ? title : 'No title available',
        subtitle: subtitle ? subtitle : '',
        author: authors ? authors[0] : 'No authors available',
        isbn: industryIdentifiers ? `ISBN_13 ${industryIdentifiers[0].identifier}` : 'No ISBN available',
        image_url: imageLinks ? imageLinks.smallThumbnail : placeholderImage,
        description: description ? description : 'No description available',
        id: industryIdentifiers ? `${industryIdentifiers[0].identifier}` : '',
      };
    }))
    .then(bookInfo => response.render('pages/searches/show', {results: bookInfo}))
    .catch(err => handleError(err, response));
}

function updateBook(request, response) {
  let {title, author, isbn, image_url, description} = request.body;
  let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5 WHERE id=$6;`;
  let values = [title, author, isbn, image_url, description, request.params.id];

  return client.query(SQL, values)
    .then(response.render('pages/books/show', {book: {}, message: 'This book has been updated!'}))
    .catch(err => handleError(err, response));
}

function deleteBook(request, response) {
  let SQL = 'DELETE FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(response.render('pages/books/show', {book: {}, message: 'This book has been removed from your database!'}))
    .catch(err => handleError(err, response));
}

function handleError(error, response) {
  response.render('pages/error', {error: error});
}
