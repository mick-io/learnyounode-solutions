const net = require("net");
const strftime = require("strftime");

const port = process.argv[2];

const server = net.createServer((socket) => {
  const data = strftime("%F %H:%M", new Date());
  socket.end(data + "\n");
});

server.listen(port);
