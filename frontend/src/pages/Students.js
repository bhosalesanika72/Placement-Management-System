import React, { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Students</h2>

      {students.map((student) => (
        <div
          key={student._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Branch: {student.branch}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;