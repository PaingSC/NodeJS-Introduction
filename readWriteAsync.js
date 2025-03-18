// Reading and Writing Files Asynchronously (Non-Blocking)
// Running time consuming codes in background

const fs = require("fs");

// Asynchronous way (Non-blocking)
// reading file
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  if (err) return "Couldn't find the file!";
  console.log(data);

  // writing file
  fs.writeFile(
    "./txt/output-async.txt",
    `This fils is written asynchronously! Text from the 'input.txt' is '${data}'.`,
    "utf-8",
    (err) => {
      if (err) return console.log("Couldn't write the file");
      console.log("File has been written!s");
    }
  );
});
console.log("Will read file in background !");
