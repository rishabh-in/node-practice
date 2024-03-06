const {spawn, fork} = require('child_process');

// spawn

let spawnChild = spawn("ls", ["-lh", "./child process/index.js"]);

// set encoding
spawnChild.stdout.setEncoding("utf-8");


spawnChild.stdout.on("data", (data) => {
  console.log(data);
})

spawnChild.stderr.on("data", (err) => {
  console.log(err);
})


// fork

let forkChild = fork("./child_process");


forkChild.send({data: "From parent Process"});
forkChild.send({data: "From parent Process"});
forkChild.send({data: "From parent Process"});

forkChild.on("message", (data) => {
  console.log(data);
})

forkChild.send({data: "From parent Process"});