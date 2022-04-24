const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(error);
      return;
    }
    const second = result;

    writeFile(
      "./content/subfolder/test.txt",
      `Here is result: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
