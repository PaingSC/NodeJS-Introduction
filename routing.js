// VI. Routing

// Importing 'http' for server and 'url' for routing
const http = require("http");
const path = require("path");
const url = require("url");

// create a server
const server = http.createServer((req, res) => {
  // logging url object
  console.log(req.url);

  // Routing
  const pathName = req.url;

  if (pathName === "/") {
    res.end('Hello from the "Home" page!');
  } else if (pathName === "/overview") {
    res.end("This is the 'Overview' page!");
  } else if (pathName === "/product") {
    res.end('This is the "product" page!');
  } else {
    // Setting "status" code and "Headers"
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });

    res.end("<h1>Page not found!</h1>"); // Responding as a html tag
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Listening fo requests on port 8000...");
});
