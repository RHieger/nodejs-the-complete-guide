const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware!");
  res.send(`<form action="/product" method="POST">
  <input type="text" name="title">
  <button style="cursor: poiter;" type="submit">
    Add Product
  </button>
</form>`);
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
