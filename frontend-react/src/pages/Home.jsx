import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <section className="hero">

                <div className="hero-content">

                    <span className="hero-badge">
                        Student Learning Platform
                    </span>

                    <h1>
                        Learn New Skills.
                        <br />
                        Build Your Future.
                    </h1>

                    <p>
                        SCMS helps students discover courses,
                        learn at their own pace and track their
                        academic progress from one simple platform.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/student/courses"
                            className="primary-btn"
                        >
                            Browse Courses
                        </Link>

                        <Link
                            to="/student/register"
                            className="secondary-btn"
                        >
                            Create Account
                        </Link>

                    </div>

                </div>

            </section>

            <section className="home-section">

                <h2>
                    Why Choose SCMS?
                </h2>

                <div className="feature-grid">

                    <div className="feature-card">

                        <div>
                            📚
                        </div>

                        <h3>
                            Quality Courses
                        </h3>

                        <p>
                            Learn programming, web development,
                            data science and more.
                        </p>

                    </div>

                    <div className="feature-card">

                        <div>
                            📊
                        </div>

                        <h3>
                            Track Progress
                        </h3>

                        <p>
                            Monitor your learning progress and
                            completed courses.
                        </p>

                    </div>

                    <div className="feature-card">

                        <div>
                            🏆
                        </div>

                        <h3>
                            Earn Certificates
                        </h3>

                        <p>
                            Complete courses and receive certificates
                            for your achievements.
                        </p>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default Home;