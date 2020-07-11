const express = require("express");
const bodyParser = require('body-parser');

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

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
