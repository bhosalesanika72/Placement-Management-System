const express = require("express");
const router = express.Router();

const {
  addCompany,
  getCompanies,
} = require("../controllers/companyController");

router.post("/add", addCompany);

router.get("/", getCompanies);

module.exports = router;