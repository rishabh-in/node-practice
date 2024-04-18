const {workerData, parentPort} = require("worker_threads");

let counter = 0;

if(workerData && workerData.hasOwnProperty("threads")) {
  for(let i = 0; i < 20000000000 / workerData.threads; i++) {
    counter += 1;
  }
} else {
  for(let i = 0; i < 20000000000; i++) {
    counter += 1;
  }
}


parentPort.postMessage(counter);