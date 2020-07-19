const path = require('path');
 
const express = require('express');
 
const router = express.Router();
 
router.get('/', (request, response, next) => {
 
    console.log('Sending response for \'/\'...\n');
 
    response.sendFile( path.join(__dirname, '..', 'views', 'index.html') );
 
});
 
router.get('/add-log-entry', (request, response, next) => {
 
    console.log('Sending response for \'/add-log-entry\'...\n');
 
    response.sendFile( path.join(__dirname, '..', 'views', 'add-log-entry.html') );
 
});
 
router.post('/add-log-entry', (request, response, next) => {
 
    // Log posted entry to console:
 
    console.log('Adding physical fitness log entry...\n');
 
    console.log(request.body);
 
    console.log('\n');
 
    console.log("Redirecting to \'/\'...\n");
 
    response.redirect('/');
 
});
 
module.exports = router;
