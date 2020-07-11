const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { response } = require("express");

const port = 3000;
const app = express();

// body-parser was deprecated in 2014 because Express 4.x 
// includes its own internal parser. However, body-parser may
// still be used if the 'extended' parameter is set, and will
// prevent warning or error messages. See StackOverflow:
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
// Also see body-parser documentation:
// https://www.npmjs.com/package/body-parser#extended
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(adminRoutes);
app.use(shopRoutes);

// 404 Error Handler
app.use( (request, response, next) => {
  response.status(404).send(`<h1 style="color: blue; margin-top: 25px;
border-bottom: 1.5px solid #a9a9a9; width: 22.5%;">
Error 404: Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`HTTP Server Listening on Port ${port}...`)
});
