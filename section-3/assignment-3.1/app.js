const http = require('http');
const fs = require('fs');
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
    // response.write(`<html>
    //   <head>
    //     <title>Simple Node.js Server</title>
    //   </head>
    //   <body>
    //     <h1>Hi, I'm the Node.js HTTP Server!</h1>
    //   </body>
    // </html>`);
    // return response.end();

    // STEP 3. Add a form with user name <input> to
    // '/' route and submit a POST request to
    // '/create-user' upon submit button click.

    response.write(`<html>
      <head>
        <title>Add a User</title>
      </head>
      <body>
        <h1>Hi, I'm the Node.js HTTP Server!</h1>
        <form action="/create-user" method="POST">
          <h2>Create New User</h2>
          <label for="firstName">
            First Name:&nbsp;&nbsp;
          </label>
          <input type="text" name="firstName" />
          <br /><br />
          <label for="lastName">
            &nbsp;Last Name:&nbsp;&nbsp;
          </label>
          <input type="text" name="lastName" />
          <br /><br />
          <button type="submit" style="cursor: pointer;">
            Add New User
          </button>
        </form>
      </body>
      </head>`)
      return response.end();
  }

  if (url === '/users') {
    response.write(`<html>
      <head>
        <title>User List</title>
      </head>
      <body>
        <h1>User List</h1>
        <ul>
          <li>Ada Lovelace</li>
          <li>Vanevar Bush</li>
          <li>Alan Turing</li>
          <li>Sir Tim Berners-Lee</li>
        </ul>
      </body>
    </html>`
    );
    return response.end();
  }
  // STEP 4. Add '/create-user' route, parse POSTed data
  // and log it to console.

  if (url === '/create-user' && method === "POST") {
    request.on('data', (chunk) => {
      console.log(`NEW USER
      Raw Data: ${chunk.toString()}`);
    });
    response.writeHead(302, {Location: '/'})
    response.end();
  }
});

httpServer.listen(port, () => {
  console.log(`\nNode.js HTTP Server listening on Port ${port}...\n`);
});
