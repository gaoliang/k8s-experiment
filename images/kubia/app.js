const http = require('http');
const os = require('os');

console.log("Kubia server starting ...")

http.createServer(function (request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200)
  request.pipe(response)
  response.end("You've hit " + os.hostname() + "\n");

}).listen(8080)