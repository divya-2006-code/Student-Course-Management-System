import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import StudentLogin from "./pages/student/Login";
import Register from "./pages/student/Register";
import ForgotPassword from "./pages/student/ForgotPassword";
import Courses from "./pages/student/Courses";
import CourseDetails from "./pages/student/CourseDetails";
import AdminLogin from "./pages/admin/Login";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/student/login"
                    element={<StudentLogin />}
                />

                <Route
                    path="/student/register"
                    element={<Register />}
                />

                <Route
                    path="/student/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/student/courses"
                    element={<Courses />}
                />
				
				<Route
				path="/student/course-details/:id"
				element={<CourseDetails />}
			/>

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;