import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/students/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      response.data.token
    );
    localStorage.setItem(
    "studentId",
    response.data.studentId
    );

    alert("Login Successful");

    navigate("/dashboard");

  } catch (error) {
    console.log(error);

    console.log(
      "Response Data:",
      error.response?.data
    );

    alert(
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Login Failed"
    );
  }
};
  

  return (
    <div className="login-container">
      <h2 className="login-title">
        Student Login
      </h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="login-input"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="login-input"
          required
        />

        <button
          type="submit"
          className="login-button"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;