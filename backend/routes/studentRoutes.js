const express = require("express");
const router = express.Router();

const {
  getStudents,
  registerStudent,
  loginStudent,
  getProfile,
} = require("../controllers/studentController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

router.get("/", getStudents);

router.post(
  "/register",
  registerStudent
);

router.post(
  "/login",
  loginStudent
);

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

module.exports = router;