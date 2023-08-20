// const simple = require("./moduleFirst.mjs"); // This is known as common js import module

import simple from "./moduleFirst.js"; // default import
import { simple2 } from "./moduleFirst.js"; // named import

simple();
simple2();
