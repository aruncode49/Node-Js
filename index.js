// Node js Native module -> like fs, http, https ..

// 1. fs => file system
const fs = require("fs");

fs.writeFile("./message.txt", "Hello this is msg from node js", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
