const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/subfolder/second.txt", "utf-8");
    await writeFile(
      "./content/subfolder/test.txt",
      `HERE IS ${first} and ${second}`,
      {
        flag: "a",
      }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((data) => data.split(" "))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
