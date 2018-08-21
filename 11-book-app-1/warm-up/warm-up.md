# Warm-Up Exercise
Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```
'use strict'

let express = app();

app.use(express.static('public'));

app.get('/user-list', (request, response) {
  response.renderFile('index.html', [users: data])
})
```
