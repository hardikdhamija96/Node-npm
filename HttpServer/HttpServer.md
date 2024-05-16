## Creating an HTTP Server in Node.js

In Node.js, you can create an HTTP server to handle HTTP requests and serve responses. Here's how you can create a basic HTTP server using the built-in `http` module:

### Example:

```javascript
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the status code and response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
