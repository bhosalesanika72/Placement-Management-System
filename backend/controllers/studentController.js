const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========================
// Get All Students
// ==========================
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// ==========================
// Register Student
// ==========================
exports.registerStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      branch,
      skills,
    } = req.body;

    // Check if email already exists
    const existingStudent =
      await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Hash Password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create Student
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      branch,
      skills,
    });

    await newStudent.save();

    res.status(201).json({
      message: "Student Registered Successfully",
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// ==========================
// Login Student
// ==========================
exports.loginStudent = async (req, res) => {
  try {
    const { email, password } =
      req.body;

    const student =
      await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        student.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: student._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
    message: "Login Successful",
    token,
    studentId: student._id,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// ==========================
// Get Student Profile
// ==========================
exports.getProfile = async (req, res) => {
  try {

    const student =
      await Student.findById(
        req.user.id
      ).select("-password");

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};