const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  const pi = calculatePi(message.iterations);
  parentPort.postMessage({ pi });
});
