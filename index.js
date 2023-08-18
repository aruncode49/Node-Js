const fs = require("fs");

fs.writeFile("./message.txt", "Hello this is msg from node js", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
