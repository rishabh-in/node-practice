const fs = require('fs');

const readStream = fs.createReadStream("../input1.txt");
const writeStream = fs.createWriteStream("./output");

readStream.on("data", (data) => {
  console.log(data.toString());
  writeStream.write(data);
});

readStream.on("end", () => {
  console.log("streaming ends")
})



readStream.pipe(writeStream);
