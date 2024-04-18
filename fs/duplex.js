const fs = require("fs");
const {Duplex} = require("stream");


const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log('Reading', chunk.toSting());
    callback();
  },

  read(size) {
    // const data = fs.
  }
})