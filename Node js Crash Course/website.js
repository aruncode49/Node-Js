import http from "http";
import fs from "fs";

const port = process.env.Port || 3001;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Sending html file on custom url
    res.statusCode = 200;
    const data = fs.readFileSync("index.html").toString();
    res.end(data);
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Contact Page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Page not found</h1>");
  }
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on ${port}`);
});
