import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/common.css";

function AdminApplications() {
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

  const updateStatus = async (
    applicationId,
    status
  ) => {
    try {
      await axios.put(
        `http://localhost:5000/api/applications/${applicationId}`,
        {
          status,
        }
      );

      alert("Status Updated Successfully");

      fetchApplications();

    } catch (error) {
      console.log(error);
      alert("Status Update Failed");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">
        Admin Applications
      </h1>

      {applications.map((application) => (
        <div
          key={application._id}
          className="card"
        >
          <h2>
            Student:
            {" "}
            {application.studentId?.name}
          </h2>

          <p>
            <strong>Email:</strong>{" "}
            {application.studentId?.email}
          </p>

          <p>
            <strong>Company:</strong>{" "}
            {application.companyId?.companyName}
          </p>

          <p>
            <strong>Current Status:</strong>{" "}
            {application.status}
          </p>

          <select
            value={application.status}
            onChange={(e) =>
              updateStatus(
                application._id,
                e.target.value
              )
            }
          >
            <option value="Applied">
              Applied
            </option>

            <option value="Shortlisted">
              Shortlisted
            </option>

            <option value="Selected">
              Selected
            </option>

            <option value="Rejected">
              Rejected
            </option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default AdminApplications;