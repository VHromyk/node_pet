const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with ${id}`);
});

customEmitter.on("response2", () => {
  console.log("some other logic");
});

// This logic is metter
customEmitter.emit("response", "john", 34);
