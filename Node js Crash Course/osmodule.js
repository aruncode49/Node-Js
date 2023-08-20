const os = require("os");

// By OS module we can find out details about our system for our node js project.
console.log(os.freemem()); // Return freememory of system
console.log(os.homedir()); // Return homedirectory of system
console.log(os.hostname()); // Return hostname of system eg. AJ
