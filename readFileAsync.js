const fs = require("fs");

function readfileAsync(filePaths, callback) {
  let result = [];
  let count = 0;
  filePaths.forEach((path, index) => {
    fs.readFile(path, "utf8", (err, data) => {
      if(err) {
        console.log(err);
        callback(err);
        return;
      }
      result[index] = data;
      count++;
      if(count === filePaths.length) {
        callback(null, result);
      }
    })
  });
}

readfileAsync(["input1.txt", "input2.txt", "input3.txt"], (err, data) => {
  if(err) console.log(err);
  console.log("data fetched", data)
})