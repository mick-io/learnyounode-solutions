const http = require("http");
const urlpkg = require("url");

const PORT = +process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    response.writeHead(405);
    response.end();
    return;
  }

  const url = urlpkg.parse(request.url, true);
  const time = new Date(url.query.iso);
  let data;

  if (/^\/api\/parsetime/.test(request.url)) {
    data = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
  } else if (/^\/api\/unixtime/.test(request.url)) {
    data = { unixtime: time.getTime() };
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
});

server.listen(PORT);
