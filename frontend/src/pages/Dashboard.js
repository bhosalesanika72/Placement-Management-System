import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Placement Management System
      </h1>

      <div className="dashboard-buttons">

        <button
          className="dashboard-btn"
          onClick={() => navigate("/profile")}
        >
          My Profile
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/students")}
        >
          View Students
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/companies")}
        >
          View Companies
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/applications")}
        >
          My Applications
        </button>

        <button
          className="dashboard-btn"
          onClick={() =>
            navigate("/admin-applications")
          }
        >
          Admin Applications
        </button>

        <button
          className="dashboard-btn"
          onClick={() =>
            navigate("/statistics")
          }
        >
          Statistics
        </button>

        <button
          className="dashboard-btn logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;