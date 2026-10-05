import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "admin@scms.com" &&
      password === "Admin@123"
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      localStorage.setItem(
        "adminSession",
        JSON.stringify({
          name: "Administrator",
          email: email
        })
      );

      alert("Admin Login Successful.");

      window.location.href =
        "http://localhost:5173/admin/dashboard.html";

    } else {

      alert(
        "Invalid admin email or password."
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-wrapper">

        <div className="login-left">

          <div className="login-brand">

            <div className="login-brand-icon">
              🎓
            </div>

            <div>
              <h2>SCMS</h2>
              <span>Learning Platform</span>
            </div>

          </div>

          <div className="login-left-content">

            <span className="login-tag">
              ADMIN PORTAL
            </span>

            <h1>
              Welcome Back,<br />
              <span>Administrator.</span>
            </h1>

            <p>
              Manage courses, students and the complete
              learning platform through the SCMS
              administration portal.
            </p>

            <div className="login-features">

              <div>

                <span>📚</span>

                <div>
                  <strong>Course Management</strong>
                  <small>
                    Create and manage learning courses.
                  </small>
                </div>

              </div>

              <div>

                <span>👥</span>

                <div>
                  <strong>Student Management</strong>
                  <small>
                    Manage students and enrollments.
                  </small>
                </div>

              </div>

              <div>

                <span>📊</span>

                <div>
                  <strong>Reports & Analytics</strong>
                  <small>
                    Monitor platform learning activity.
                  </small>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="login-right">

          <div className="login-form-container">

            <div className="form-icon">
              🔐
            </div>

            <h1>Admin Login</h1>

            <p className="form-description">
              Login to manage the SCMS platform.
            </p>

            <form onSubmit={handleLogin}>

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="submit"
                className="login-button"
              >
                Login
              </button>

            </form>

            <div className="demo-credentials">

              <strong>
                Demo Login Credentials
              </strong>

              <p>
                Email: admin@scms.com
              </p>

              <p>
                Password: Admin@123
              </p>

            </div>

            <p className="restricted-text">
              Admin access is restricted to authorized users.
            </p>

            <Link
              to="/"
              className="back-home"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;