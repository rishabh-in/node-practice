const redis = require('redis');

// Create a Redis client
let client = redis.createClient(6379);


async function enqueueFileProcessingJob(fileId) {
  await client.connect();
  const jobData = {fileId, timeStamp: Date.now()};
  client.rPush('fileProcessing', JSON.stringify(jobData));
}


let fileId = "newFIleId";
enqueueFileProcessingJob(fileId)