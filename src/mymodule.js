const fs = require("fs");
const path = require("path");

module.exports = function (dir, ext, cb) {
  if (!ext.startsWith(".")) {
    ext = "." + ext;
  }
  fs.readdir(dir, "utf-8", (err, files) => {
    if (err) {
      return cb(err);
    }
    files = files.filter((f) => path.extname(f) == ext);
    cb(null, files);
  });
};
