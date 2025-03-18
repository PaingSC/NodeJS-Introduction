// III. Asynchronous callhackhell

// Importing fs(file system)
const fs = require("fs");

// Callback Hell example
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Couldn't find the file 'start.txt'.");
  console.log(`data1: ${data1}`);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    if (err) return console.log("Error! 💥");
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      if (err) return console.log("Error! 💥");
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        if (err) return console.log("Error! 💥");
        console.log("File has been written! 😊");
      });
    });
  });
});
