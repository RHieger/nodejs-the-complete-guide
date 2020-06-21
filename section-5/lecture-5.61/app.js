const http = require("http");

const express = require("express");

const app = express();

app.use( (req, res, next) => {
  console.log("In the middleware!");
  next();  // Allows request to proceed to next middleware
});

app.use( (req, res, next) => {
  console.log("In another middleware!");
  // TBD: send a response to browser
});

const server = http.createServer(app);

server.listen(3000);
