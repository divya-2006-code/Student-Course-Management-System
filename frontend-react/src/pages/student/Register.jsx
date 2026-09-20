import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {

        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration successful!");

        navigate("/student/login");
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Student Registration</h1>

                <p>
                    Create your SCMS student account.
                </p>

                <form onSubmit={handleRegister}>

                    <label>
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        Create Account
                    </button>

                </form>

                <p>
                    Already have an account?
                    {" "}
                    <Link to="/student/login">
                        Login
                    </Link>
                </p>

                <Link to="/">
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
}

export default Register;