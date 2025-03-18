// V. Creating A Simple Web Server

// Importing http module
const http = require("http");

// Creating a server
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log("res: ", res);
  res.end("Hello from the server");
});

// Using(listening) server
// server.listen(port, host, callback)
// port = sertain sub address on certain host
// IP address for local host = 127.0.0.1
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
