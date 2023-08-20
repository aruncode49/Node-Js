const fs = require("fs");

// readFile and writeFile are working on non-blocking I/O model, they does not hold the process for completing their task, but delay the process also.

// On the other hand readFileSync and writeFileSync are working on blocking I/O model, they block the process untill they finished.

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("Line 4 = ", err, data);
});

const a = fs.readFileSync("file.txt").toString();
console.log("line 8 = ", a);

console.log("Line 10 = Ye Pehle run hoga upar wali statement se");

fs.writeFile("file2.txt", "This is file 2", () => {
  console.log("Written to the file");
});

fs.writeFileSync("file3.txt", "This is file3"); // return nothing
