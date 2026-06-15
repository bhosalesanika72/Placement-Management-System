const Company = require("../models/Company");

// Add Company
exports.addCompany = async (req, res) => {
  try {
    const {
      companyName,
      package,
      location,
      eligibility,
      description,
    } = req.body;

    const company = new Company({
      companyName,
      package,
      location,
      eligibility,
      description,
    });

    await company.save();

    res.status(201).json({
      message: "Company Added Successfully",
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get All Companies
exports.getCompanies = async (req, res) => {
  try {
    const companies =
      await Company.find();

    res.json(companies);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};