import url from "url";

const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL); // return object
console.log(myURL.href); // https://example.org/a/b/c?d=e#fgh
