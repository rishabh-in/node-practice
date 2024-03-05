const childProcess = require("child_process");
const path = require("path")
console.log("Main started executing");

function factorial(n) {
  let ans = 1;

  if(n === 0) {
    return 1;
  }

  for(let i = 2; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
}

const child = childProcess.fork(path.join(__dirname, "child.js"));

child.send("Hello from parent!");

child.on('message', (message) => {
  console.log("Received msg from child", message);
})

console.log("Main end execution");
