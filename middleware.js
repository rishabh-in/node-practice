const express = require("express");
let app = express();
app.use(express.json());

// custom meddleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
})

app.get("/", (req, res) => {
  res.end("Hello world");
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
});