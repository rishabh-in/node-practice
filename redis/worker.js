const redis = require("redis");
const client = redis.createClient(6379);



function processFile(job) {
  console.log("Processing started");
}

async function startWorker() {
  await client.connect();
  function processNextJob() {
    client.lPop('fileProcessing', (err, job) => {
      console.log(job)
      if(job) {
        const jobData = JSON.parse(job);
        processFile(jobData);
        processNextJob();
      } else {
        console.log("No jobs in the queue");
        setTimeout(processNextJob, 1000)
      }
    })
  }
  processNextJob();
}

startWorker()