// Module Wrapper Function => When we run a module inside nodejs then nodeJs wrap the module inside this module wrapper function automatically.

// function(exports, require, module, __filename, __dirname){}

const Arun = {
  name: "Arun Kumar",
  age: 22,
  developer: true,
};

// Common Js module exports
module.exports = Arun;
