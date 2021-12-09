const http = require("http");

Promise.all(process.argv.slice(2).map(collectData)).then((data) => {
  data.forEach((s) => console.log(s));
});

function collectData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = "";
      response.setEncoding("utf-8");
      response.on("error", (err) => reject(err));
      response.on("data", (chuck) => (data += chuck));
      response.on("end", () => resolve(data));
    });
  });
}
