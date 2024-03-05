const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  const log = `Incoming Request at ${req.url} on -  ${Date.now()}`
  fs.appendFile("./log.txt", `${log}\n`, (err) => {
    if(err) {
      console.log(err);
    }
  })
  res.writeHead(200).end("Bye bYe!!")
});

server.listen(7070, () => {
  console.log("Server is running on 7070")
})