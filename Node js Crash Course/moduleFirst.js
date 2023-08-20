// function simple() {
//   console.log("Simple function from module first");
// }

// module.exports = simple; // This is known as common js export module

// Note: If we want to export or import as ES module (ecma script module) without any HTML file or type inside the package.json then the extension of the file must be ".mjs", and ".mjs" is not compatible with common js module or we can not write require for .mjs extension.

export default function simple() {
  // default export
  console.log("Simple function from first module");
}

// or

export function simple2() {
  // named export
  console.log("Simple2 function from first module");
}
