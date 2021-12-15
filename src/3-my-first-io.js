const fs = require("fs");

const content = fs.readFileSync(process.argv[2], "utf-8");
const nLines = content.split("\n").length - 1;
console.log(nLines);
