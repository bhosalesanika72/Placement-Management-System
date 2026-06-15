import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/common.css";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/companies"
      );

      setCompanies(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load companies");
    }
  };

  const applyCompany = async (companyId) => {
    try {
      const studentId =
      localStorage.getItem("studentId");

      const response = await axios.post(
        "http://localhost:5000/api/applications/apply",
        {
          studentId,
          companyId,
        }
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(
          error.response.data.message ||
          error.response.data.error
        );
      } else {
        alert("Application Failed");
      }
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">
        Available Companies
      </h1>

      {companies.length === 0 ? (
        <h3>No Companies Found</h3>
      ) : (
        companies.map((company) => (
          <div
            key={company._id}
            className="card"
          >
            <h2>
              {company.companyName}
            </h2>

            <p>
              <strong>Package:</strong>{" "}
              {company.package}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {company.location}
            </p>

            <p>
              <strong>Eligibility:</strong>{" "}
              {company.eligibility}
            </p>

            <p>
              <strong>Description:</strong>{" "}
              {company.description}
            </p>

            <button
              className="primary-btn"
              onClick={() =>
                applyCompany(company._id)
              }
            >
              Apply
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Companies;