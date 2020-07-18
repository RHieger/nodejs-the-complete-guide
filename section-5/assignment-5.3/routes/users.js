const path = require('path');

const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/users', (request, response, next) => {
  console.log('Serving Landing page...');
  response.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = usersRouter;
