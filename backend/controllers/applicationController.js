const Application = require("../models/Application");

// Apply for Company
exports.applyCompany = async (req, res) => {
  try {
    const { studentId, companyId } = req.body;

    // Check if already applied
    const existingApplication =
      await Application.findOne({
        studentId,
        companyId,
      });

    if (existingApplication) {
      return res.status(400).json({
        message:
          "You have already applied for this company",
      });
    }

    const application = new Application({
      studentId,
      companyId,
    });

    await application.save();

    res.status(201).json({
      message:
        "Application Submitted Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

// Get All Applications
exports.getApplications = async (req, res) => {
  try {
    const applications =
      await Application.find()
        .populate(
          "studentId",
          "-password"
        )
        .populate("companyId");

    res.json(applications);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

// Update Application Status
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const application =
      await Application.findByIdAndUpdate(
        id,
        {
          status,
        },
        {
          new: true,
        }
      );

    if (!application) {
      return res.status(404).json({
        message:
          "Application not found",
      });
    }

    res.json({
      message:
        "Status Updated Successfully",
      application,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};