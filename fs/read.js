const fs = require("fs");

//async - drawback - store the whole file into the memory then then print it. For a large file it is not a good solution as it will occupy the RAM
fs.readFile("../log.txt", "utf-8", (err, data) => {
  if(err) console.log(err);

  console.log("from readFile", data);
})

// syncronous
let data = fs.readFileSync("../log.txt", "utf-8");

//async
fs.readFile("../input3.txt", "utf-8", (err, data) => {
  if(err) console.log(err);

  console.log("from readFile last \n", data);
})


const readStream = fs.createReadStream("../log.txt");




console.log("from readFileSync", data);