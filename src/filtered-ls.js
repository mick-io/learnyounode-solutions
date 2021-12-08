const fs = require("fs");
const path = require("path");

const [, , dir, extension] = process.argv;

fs.readdir(dir, "utf-8", (err, files) => {
  if (err) throw err;
  const ext = "." + extension;
  files.forEach((f) => path.extname(f) == ext && console.log(f));
});
