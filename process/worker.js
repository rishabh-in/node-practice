const { Worker } = require('worker_threads');

const calculatePi = (iterations) => {
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    const x = Math.random();
    const y = Math.random();
    if (x * x + y * y <= 1) {
      sum++;
    }
  }
  return 4 * sum / iterations;
}

// Create a worker thread
const worker = new Worker('./worker.js', { workerData: { iterations: 10000000 } });

// Receive message from the worker
worker.on('message', (message) => {
  console.log(`Calculated PI: ${message.pi}`);
});

console.log('Main thread started calculating PI...');
