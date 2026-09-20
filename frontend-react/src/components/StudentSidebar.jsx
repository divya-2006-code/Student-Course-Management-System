import React from "react";
import { NavLink } from "react-router-dom";

function StudentSidebar() {
    return (
        <aside className="sidebar student-sidebar">

            <h2>SCMS</h2>

            <p className="sidebar-title">
                Student Portal
            </p>

            <NavLink to="/student/dashboard">
                🏠 Dashboard
            </NavLink>

            <NavLink to="/student/courses">
                📚 Browse Courses
            </NavLink>

            <NavLink to="/student/my-courses">
                🎓 My Courses
            </NavLink>

            <NavLink to="/student/progress">
                📊 Progress
            </NavLink>

            <NavLink to="/student/certificate">
                🏆 Certificate
            </NavLink>

            <NavLink to="/student/notifications">
                🔔 Notifications
            </NavLink>

            <NavLink to="/student/profile">
                👤 Profile
            </NavLink>

            <NavLink to="/">
                🚪 Logout
            </NavLink>

        </aside>
    );
}

export default StudentSidebar;