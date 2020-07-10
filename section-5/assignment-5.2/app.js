// STEP 1. Create npm project and install Express;
// also install nodemon

const express = require('express');

const app = express();

const port = 3000;

app.use('/', (request, response, next) => {
  console.log('Hello from my first Middleware!');
  next();
});

app.use('/users', (request, response, next) => {
  console.log('Hello from my second middleware!');
  response.send(`<html>
    <head>
      <title>User List</title>
    </head>
    <body>
      <h1>User List</h1>
      <ul>
        <li>Charles Babbage</li>
        <li>Ada Lovelace</li>
        <li>Alan Turing</li>
        <li>Sir Tim Berners Lee</li>
      </ul>
    </body>`);
    next();
});

app.listen(port, () => {
  console.log(`HTPP Server listening at Port ${port}...`);
});
