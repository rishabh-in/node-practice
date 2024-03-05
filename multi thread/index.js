const express = require("express");
const {Worker} = require("worker_threads");
const app = express();


const numOfThreads = 10;


function distributeTask() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {workerData: {threads: numOfThreads}});

    worker.on("message", (data) => {
      resolve(data);
    })

    worker.on("error", (error) => {
      reject(error);
    })
  })
}

app.get("/non-blocking", (req, res) => {
  try {
    console.log("this is inside non blocking");
    res.status(200).send("Hello from non blocking");
  } catch (error) {
    console.log(error)
  }
});

app.get("/blocking/single-thread", async (req, res) => {
  try {
    console.log("This is inside blocking");

    // do some heavy computation;
    // let counter = 0;
    // for(let i = 0; i < 20000000000; i++) {
    //   counter += 1;
    // }

    const worker = new Worker("./worker.js");

    worker.on("message", (data) => {
      res.status(200).send(`Response from worker ${data}`);
    })

    worker.on("error", (error) => {
      res.status(400).send("Error in execution");
    })

    res.status(200).send(`this is inside blocking single thread ${total}`);
  } catch (error) {
    console.log(error);
  }
});


app.get("/blocking/multi-thread", async(req, res) => {
  // With multiple threds

  let counterPromiseArray = [];
  for(let i = 0; i < numOfThreads; i++) {
    counterPromiseArray.push(distributeTask());
  }

  let result = await Promise.all(counterPromiseArray);
  let total = result.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0)
  console.log(total);
  res.status(200).send(`this is inside blocking multi thread ${total}`);

})


app.listen(4001, () => {
  console.log("Server is running on port 4001")
})


