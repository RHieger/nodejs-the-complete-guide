const http = require('http');
const port = 3000;

// STEP 1. Spin up a Node.js-driven Server (on port 3000)

/*
const httpServer = http.createServer( (request, response) => {
  
});

httpServer.listen(port, () => {
  console.log(`\nNode.js HTTP Server listening on Port ${port}...\n`);
});
*/

// STEP 2. Add two routes: '/' and '/users'
// '/' should respond with greeting of choice.
// '/users' should respond with fictitious user
// list in unordered list.

const httpServer = http.createServer( (request, response) => {
  const url = request.url;
  const method = request.method;
  
  if (url === '/') {
    response.write(`<html>
      <head>
        <title>Simple Node.js Server</title>
      </head>
      <body>
        <h1>Hi, I'm the Node.js HTTP Server!</h1>
      </body>
    </html>`);
    return response.end();
  }
});

httpServer.listen(port, () => {
  console.log(`\nNode.js HTTP Server listening on Port ${port}...\n`);
});
