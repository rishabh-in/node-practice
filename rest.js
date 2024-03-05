const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to user portal<h1>")
})

app.get("/users", (req, res) => {
  res.send(users);
})

app.get("/users/:id", (req, res) => {
  let {id} = req.params;
  let filterUser = users.filter((u) => u.id === Number(id));
  res.send(filterUser);
})

app.post("/user", (req, res) => {
  let {first_name, last_name, email, gender, job_title} = req.body;
  users.push({first_name, last_name, email, gender, job_title});
  res.status(200).send("Data Saved");
})

// app.patch("/users/")

app.listen(4040, () => {
  console.log("Server is running")
})