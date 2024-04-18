console.log('Start');

// Timer Phase
setTimeout(() => {
  console.log('Timer callback');
}, 0);

// setImmediate Phase
setImmediate(() => {
  console.log('setImmediate callback');
});

// I/O Polling Phase
const fs = require('fs');
fs.readFile('input3.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('I/O callback:', data);
});

// Resolved Promise
returnPromise().then((data) => console.log(data));

// process.nextTick Phase
process.nextTick(() => {
  console.log('process.nextTick callback');
});


function returnPromise() {
  return new Promise((resolve, reject) => {
    resolve("Resolved Promsie")
  })
}

console.log('End');
