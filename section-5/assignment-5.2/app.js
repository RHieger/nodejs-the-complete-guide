// STEP 1. Create npm project and install Express;
// also install nodemon

const express = require('express');
const { response } = require('express');

const app = express();

const port = 3000;

// STEP 2. Create an Express app that funnels requests through
// 2 middleware functions that log something to console and
// return one respoonse.

/* Commented out in favor of refactored middleware below.

app.use( (request, response, next) =>  {
  console.log('Hello from my first Middleware!');
  next();
});

app.use( (request, response, next) => {
  console.log('Hello from my second Middleware!');
  response.send(`<html>
    <head>
      <title>Welcome</title>
    </head>
    <body>
      <h1 style="color: blue;">Welcome to My Page!</h1>
    </body>
  </html>`);
});

*/

// STEP 3. Handle requests to '/' and '/users' such that each
// request only has one middleware that does something with
// it (e.g. send dummy reponse).

app.use('/users', (request, response, next) => {
  console.log('Sending User List Page...');
  response.send(`<html>
  <head>
    <title>User List</title>
  </head>
  <body>
    <h1 style="color: blue;">User List</h1>
    <ul style="list-style-type: square;
    font-size: 21px; color: blue;">
      <li>Charles Babbage</li>
      <li>Ada Lovelace</li>
      <li>Alan Turing</li>
      <li>Sir Tim Berners-Lee</li>
    </ul>
  </body>
</html>`);
});

app.use('/', (request, response, next) => {
  console.log('Sending Landing Page...');
  response.send(`<html>
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <h1 style="color: blue;">Welcome to my Landing Page!</h1>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`HTTP Server is listening on Port ${port}...`);
});
