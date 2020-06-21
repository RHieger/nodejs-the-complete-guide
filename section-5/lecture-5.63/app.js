const express = require("express");

const app = express();

app.use( (req, res, next) => {
  console.log("In the middleware!");
  next();  // Allows request to proceed to next middleware
});

app.use( (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});


// Express makes it possible to shortcut
// the code of the next two lines. See the
// refactored code below them.
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);