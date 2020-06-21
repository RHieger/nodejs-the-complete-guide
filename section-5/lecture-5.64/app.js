const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware!");
  res.send("<h1>The &ldquo;Add Product&rdquo; Page</h1>");
});

// NOTE: "/" path simply means path STARTS with "/";
// the path may continue with any other specified path
// segment.
app.use("/", (req, res, next) => {
  console.log("In the middleware!");
  next();  // Allows request to proceed to next middleware
});

app.use( (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
