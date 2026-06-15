const express = require("express");
const router = express.Router();

const {
  applyCompany,
  getApplications,
  updateStatus,
} = require("../controllers/applicationController");

router.post("/apply", applyCompany);

router.get("/", getApplications);

router.put("/:id", updateStatus);

module.exports = router;