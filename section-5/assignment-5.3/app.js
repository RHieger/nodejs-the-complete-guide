// STEP 1. Create a npm project and install Express.js
// (Nodemon if you want).

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const addUserRoute = require('./routes/add-user');
const usersRoute = require('./routes/users');

// STEP 2. Create an Express.js app that serves two HTML files
// (with content of your choice) for "/" and "/users"

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', addUserRoute);
app.use(usersRoute);

app.listen(port, () => {
  console.log(`HTTP Server Listening on Port ${port}...`);
});
