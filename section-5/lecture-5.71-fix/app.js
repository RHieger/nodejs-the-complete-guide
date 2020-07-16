const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', adminRoutes);
app.use(shopRoutes);

app.listen(port, () => {
  console.log(`HTTP Server listening on Port ${port}...`);
});
