// STEP 1. Create npm project and install Express;
// also install nodemon

const express = require('express');

const app = express();

const port = 3000;

// STEP 2. Create an Express app that funnels requests through
// 2 middleware functions that log something to console and
// return one respoonse.

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

app.listen(port, () => {
  console.log(`HTTP Server is listening on Port ${port}...`);
});
