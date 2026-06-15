const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Company",
  companySchema
);