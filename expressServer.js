const express = require("express");
const app = express();
app.use(express.json())
let users = [{_id: 1, name: "Rishabh", job: "SDE"}, {_id: 2, name: "Rishav", job: "SDE2"}]

app.get("/", (req, res) => {
  console.log("Inside Express Server");
  res.end("Hello World")
});

app.get("/users", (req, res) => {
  res.json(users);
})

app.post("/users", (req, res) => {
  console.log(req.body)
  users.push(req.body);
  res.end("User added");
})

app.listen(7080, () => {
  console.log("Express server is running")
})