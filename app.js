// Import the http module from Node.js
const http = require('http');

// Define the hostname and port where the server will run
const hostname = '127.0.0.1';
const port = 3000;

// Create a new server
const server = http.createServer((req, res) => {
    // Set the HTTP status code of the response to 200 (OK)
    res.statusCode = 200;
    // Set the Content-Type of the response to text/plain
    res.setHeader('Content-Type', 'text/plain');
    // End the response and send 'Hello World!\n' to the client
    res.end('Hello World!\n');
});

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
    // Log a message to the console once the server starts running
    console.log(`Server running on http://${hostname}:${port}`);
});
