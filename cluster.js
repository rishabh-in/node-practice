const cluster = require("cluster");
const os = require("os");
const http = require("http");

console.log(os.cpus().length)

if(cluster.isMaster) {
  for(let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    console.log(`${process.pid}`)
  }).listen(8002, () => {
    console.log("Server is running", process.pid)
  })
}