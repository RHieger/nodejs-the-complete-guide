const path = require('path');
 
const express = require('express');
 
const bodyParser = require('body-parser');
 
const appRoutes = require('./routes/index');;
 
const app = express();
 
app.use( bodyParser.urlencoded( {extended: false} ) );
 
app.use( express.static( path.join(__dirname, 'public') ) );
 
app.use('/', appRoutes);
 
app.listen(3000, ()  => {
 
    // Log listening port to console;
 
    console.log('\nHTTP Server listening on Port 3000...\n');
 
}); // end app.listen(3000)
