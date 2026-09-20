import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        alert("Password reset instructions have been sent to your email.");
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Forgot Password?</h1>

                <p>
                    Enter your email address to reset your password.
                </p>

                <form onSubmit={handleSubmit}>

                    <label>
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        Send Reset Link
                    </button>

                </form>

                <p>
                    Remember your password?
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

export default ForgotPassword;