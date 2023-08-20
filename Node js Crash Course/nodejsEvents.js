import EventEmitter from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Creating new event as TankFull
myEmitter.on("TankFull", () => {
  console.log("Paani ki tanki bhar gyi hai, kripya motor bnd kr dijiye");
  setTimeout(() => {
    console.log("Please turn off the motor");
  }, 3000);
});

myEmitter.emit("TankFull"); // Firing TankFull event
