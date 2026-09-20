import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <NavLink to="/">
                    SCMS
                </NavLink>
            </div>

            <div className="nav-links">

                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/student/courses">
                    Courses
                </NavLink>

                <NavLink to="/student/login">
                    Student Login
                </NavLink>

                <NavLink to="/admin/login">
                    Admin Login
                </NavLink>

                <NavLink to="/student/register">
                    Register
                </NavLink>

            </div>

        </nav>
    );
}

export default Navbar;