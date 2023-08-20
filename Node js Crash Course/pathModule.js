const path = require("path");

console.log(path.basename(__filename)); // return c:\Users\ASUS\Desktop\Node Js\Node js\pathModule.js
console.log(path.dirname("/foo/bar/baz/asdf/quux.html")); // return /foo/bar/baz/asdf
console.log("filename = ", __filename); // directory name with filename
console.log("dirname = ", __dirname); // directory name without filename
console.log(path.join("/foo", "bar", "baz/asdf", "quux", "..")); // join together
