const path = require('path');

const express = require('express');

const addUserRouter = express.Router();

addUserRouter.get('/', (request, response, next) => {
  console.log('Serving Landing page...');
  response.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
});

module.exports = addUserRouter;