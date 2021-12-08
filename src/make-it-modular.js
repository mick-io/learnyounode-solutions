const ls = require("./mymodule");

const [, , dir, ext] = process.argv;

ls(dir, ext, (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((f) => console.log(f));
});
