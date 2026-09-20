import React from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
    return (
        <aside className="sidebar admin-sidebar">

            <h2>SCMS</h2>

            <p className="sidebar-title">
                Admin Portal
            </p>

            <NavLink to="/admin/dashboard">
                🏠 Dashboard
            </NavLink>

            <NavLink to="/admin/students">
                👥 Students
            </NavLink>

            <NavLink to="/admin/courses">
                📚 Courses
            </NavLink>

            <NavLink to="/admin/add-course">
                ➕ Add Course
            </NavLink>

            <NavLink to="/admin/enrollments">
                📝 Enrollments
            </NavLink>

            <NavLink to="/admin/reports">
                📊 Reports
            </NavLink>

            <NavLink to="/admin/notifications">
                🔔 Notifications
            </NavLink>

            <NavLink to="/admin/settings">
                ⚙ Settings
            </NavLink>

            <NavLink to="/">
                🚪 Logout
            </NavLink>

        </aside>
    );
}

export default AdminSidebar;