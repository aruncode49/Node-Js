// const generateName = require("sillyname"); // OLD WAY CJS (COMMON JAVASCRIPT)
import generateName from "sillyname"; // NEW ES6 METHOD
import superHero from "superheroes";

// sillynames
const sillyname = generateName(); // Everytime this package generate a unique name
console.log(`Your name is ${sillyname}`);

// superheros
// const mySuperHero = superHero.all;
const mySuperHero = superHero.random();
console.log(mySuperHero);
