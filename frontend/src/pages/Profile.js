import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/common.css";

function Profile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/students/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStudent(response.data);

    } catch (error) {
      console.log(error);
      alert("Failed to load profile");
    }
  };

  if (!student) {
    return (
      <div className="page-container">
        <h2>Loading Profile...</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">
        My Profile
      </h1>

      <div className="card">
        <h2>{student.name}</h2>

        <p>
          <strong>Email:</strong>{" "}
          {student.email}
        </p>

        <p>
          <strong>Branch:</strong>{" "}
          {student.branch}
        </p>

        <p>
          <strong>Skills:</strong>{" "}
          {student.skills &&
            student.skills.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default Profile;