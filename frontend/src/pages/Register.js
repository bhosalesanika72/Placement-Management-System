import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    skills: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/students/register",
        {
          ...formData,
          skills: formData.skills.split(",")
        }
      );

      alert(response.data.message);

    } catch (error) {

      alert("Registration Failed");

    }

  };

  return (
    <div className="container mt-5">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Java, React, Node"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <button
          className="btn btn-primary"
          type="submit"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;