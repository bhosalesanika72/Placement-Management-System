import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/common.css";

function Statistics() {
  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/statistics"
      );

      setStats(response.data);

    } catch (error) {
      console.log(error);
      alert("Failed to load statistics");
    }
  };

  if (!stats) {
    return (
      <div className="page-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">
        Placement Statistics
      </h1>

      <div className="card">
        <h2>
          Total Students:
          {" "}
          {stats.totalStudents}
        </h2>
      </div>

      <div className="card">
        <h2>
          Total Companies:
          {" "}
          {stats.totalCompanies}
        </h2>
      </div>

      <div className="card">
        <h2>
          Total Applications:
          {" "}
          {stats.totalApplications}
        </h2>
      </div>

      <div className="card">
        <h2>
          Selected Students:
          {" "}
          {stats.selectedStudents}
        </h2>
      </div>

      <div className="card">
        <h2>
          Placement Percentage:
          {" "}
          {stats.placementPercentage}%
        </h2>
      </div>
    </div>
  );
}

export default Statistics;