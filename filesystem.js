const fs = require("fs");

fs.readFile("./samplefile.txt","utf8", (err, data) => {
  console.log("Inside readFile")
  if(err) console.log(err);
  console.log(data)

  fs.writeFile("outputfile.txt", data, (err) => {
  console.log("Inside writeFile")
    if(err) console.log(err);
    console.log("Data copied to file")
  })
})


let writableStream = fs.createWriteStream("output2.txt")
for(let i = 0; i < 1e7; i++) {
  writableStream.write(`Hello Rishabh. Printing line ${i} \n`)
}
console.log("Output2 file write completed");