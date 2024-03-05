const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test");

const userSchema = new mongoose.Schema({
  name: String,
})

const User = mongoose.model("Users", userSchema);

let newUser = new User({name: "Rishabh"});
newUser.save();