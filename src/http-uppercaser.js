const http = require("http");
const map = require("through2-map");

const PORT = +process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method !== "POST") {
    response.writeHead(205);
    return;
  }
  const dest = map((chunk) => chunk.toString().toUpperCase());
  response.writeHead(200, { "Content-Type": "text/plain" });
  request.pipe(dest).pipe(response);
});

server.listen(PORT);
