const http = require("http");

const routes = require("./routes");

console.log(routes.someText);

// Throws error because "cons" is not a keyword
//cons server = http.createServer(routes.handler);

const server = http.createServer(routes.handler);

server.listen(3000);
