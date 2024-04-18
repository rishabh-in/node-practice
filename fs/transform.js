const {Transform, pipeline} = require("stream");
const fs = require("fs");

// transformStream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
})

const readStream = fs.createReadStream("../input1.txt");
const writeStream = fs.createWriteStream("./output.txt");


// Here error  handling is difficult as we have to put .on("error") event after every pipe. And even if the first pipe fails, the second pipe will still have the memory 
//(very bad with memory leaks)
// readStream.pipe(upperCaseTransform).on("error", () => {

// }).pipe(writeStream);
// Insteam use pipeline

readStream.pipe(upperCaseTransform).pipe(writeStream);

pipeline(readStream, upperCaseTransform, writeStream, (error) => {
  console.log(error);
})