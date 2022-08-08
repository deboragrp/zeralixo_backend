const mongoose = require("mongoose");

const newTask = new mongoose.Schema({
  title: { type: String, require: true },
  status: { type: Boolean, require: true, default: false },
  date: { type: Date, default: Date.now() },
  id_user: String,
});
const tasks = mongoose.model("tasks", newTask);
module.exports = tasks;
