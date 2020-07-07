const http = require('http');
const { nextTick } = require('process');
const port = 3000;

// STEP 1. Spin up a Node.js-driven Server (on port 3000)

const httpServer = http.createServer( (request, response) => {
  response.write('<h1>Hi, I\'m a Node.js HTTP Server!</h1>');
  
});



httpServer.listen(port, () => {
  console.log(`\nNode.js HTTP Server listening on Port ${port}...\n`);
});
