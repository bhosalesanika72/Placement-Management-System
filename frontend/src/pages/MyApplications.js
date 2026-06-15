import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/common.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/applications"
      );

      setApplications(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load applications");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">
        My Applications
      </h1>

      {applications.map((application) => (
        <div
          key={application._id}
          className="card"
        >
          <h2>
            {application.companyId?.companyName}
          </h2>

          <p>
            <strong>Package:</strong>{" "}
            {application.companyId?.package}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {application.companyId?.location}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                "status-" +
                application.status.toLowerCase()
              }
            >
              {application.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;