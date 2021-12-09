const http = require("http");
const fs = require("fs");

const [, , port, fpath] = process.argv;

const server = http.createServer((_, response) => {
  response.writeHead(200, { "content-type": "text/plain" });
  fs.createReadStream(fpath).pipe(response);
});

server.listen(+port);
