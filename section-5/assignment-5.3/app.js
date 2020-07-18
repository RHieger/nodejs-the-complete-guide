// STEP 1. Create a npm project and install Express.js
// (Nodemon if you want).

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const addUserRoute = require('./routes/add-user');

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded( {extended: false} ));

app.use('/', addUserRoute);

app.listen(port, () => {
  console.log(`HTTP Server Listening on Port ${port}...`);
});
