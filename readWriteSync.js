// Reading And Writing Files Synchronously (Blocking)
const fs = require("fs");

const hello = "Hello NodeJS";
console.log(hello);
// Reading file Synchronously (Blocking)
const dataInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(dataInput);

// Writing file Synchronously (Blocking)
fs.writeFileSync(
  "./txt/output-sync.txt",
  `This fils is written synchronously! Text from the 'input.txt' is '${dataInput}'.`
);
console.log("File had been written!");
