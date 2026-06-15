import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import Companies from "./pages/Companies";
import MyApplications from "./pages/MyApplications";
import AdminApplications from "./pages/AdminApplications";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/companies"
          element={<Companies />}
        />

        <Route
          path="/applications"
          element={<MyApplications />}
        />

        <Route
          path="/admin-applications"
          element={<AdminApplications />}
        />

        <Route
          path="/statistics"
          element={<Statistics />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;