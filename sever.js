const http = require("http");

const hostname = "localhost"; // is localhost
const port = 3000; // is port 3000 nên đặt port là 8000 || 8001,...

const sever = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world\n Hoc backend cung bui tan phat");
});

sever.listen(port, hostname, () => {
  console.log(`sever running at http://${hostname}:${port}`);
});
