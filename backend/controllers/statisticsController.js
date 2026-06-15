const Student = require("../models/Student");
const Company = require("../models/Company");
const Application = require("../models/Application");

exports.getStatistics = async (req, res) => {
  try {
    const totalStudents =
      await Student.countDocuments();

    const totalCompanies =
      await Company.countDocuments();

    const totalApplications =
      await Application.countDocuments();

    const selectedStudents =
      await Application.countDocuments({
        status: "Selected",
      });

    const placementPercentage =
      totalStudents > 0
        ? (
            (selectedStudents /
              totalStudents) *
            100
          ).toFixed(2)
        : 0;

    res.json({
      totalStudents,
      totalCompanies,
      totalApplications,
      selectedStudents,
      placementPercentage,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};