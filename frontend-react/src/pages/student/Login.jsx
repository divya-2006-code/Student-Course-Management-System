import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        if (email && password) {
            navigate("/student/dashboard");
        } else {
            alert("Please enter email and password.");
        }

    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Student Login</h1>

                <p>
                    Login to access your learning dashboard.
                </p>

                <form onSubmit={handleLogin}>

                    <label>
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        Login
                    </button>

                </form>

                <Link to="/student/forgot-password">
                    Forgot Password?
                </Link>

                <p>
                    Don't have an account?
                    {" "}
                    <Link to="/student/register">
                        Register
                    </Link>
                </p>

                <Link to="/">
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
}

export default Login;