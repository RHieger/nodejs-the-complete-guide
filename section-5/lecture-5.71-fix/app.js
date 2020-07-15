const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// TBD: Add in routing

const port = 3000;

app.listen(port, () => {
  console.log(`HTTP Server listening on Port ${port}...`);
});
