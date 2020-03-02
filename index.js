const http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(`{ data: 'Hello from IIS + Node.js'}`);
}).listen(3000);

console.log("Node listening on port 3000");
