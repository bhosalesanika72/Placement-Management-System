const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  branch: String,
  skills: [String],
  resume: String,
});

module.exports = mongoose.model("Student", StudentSchema);