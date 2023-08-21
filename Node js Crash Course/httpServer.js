import http from "http";

const port = process.env.Port || 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  //   console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is my server created using http module</h1>");
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
