import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        if (email && password) {
            navigate("/admin/dashboard");
        } else {
            alert("Please enter email and password.");
        }

    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Admin Login</h1>

                <p>
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
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter admin password"
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

                <p>
                    Admin access is restricted to authorized users.
                </p>

                <Link to="/">
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
}

export default Login;