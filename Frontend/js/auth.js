// ================= Authentication Module =================

import {
    validateEmail,
    checkPasswords
} from "./validation.js";

import {
    showSuccess,
    showError,
    showConfirm
} from "./ui.js";

import {
    setUser,
    clearState
} from "./state.js";


// ================= Student Registration =================

export function registerStudent() {

    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;


    // Password check

    if (!checkPasswords(password, confirmPassword)) {

        showError("Passwords do not match.");

        return;

    }


    // Email validation

    let email =
        document.getElementById("email").value.trim();

    if (!validateEmail(email)) {

        showError("Please enter a valid email address.");

        return;

    }


    // Student Object

    let student = {

        name:
            document.getElementById("fullName").value,

        regno:
            document.getElementById("registerNo").value,

        email:
            email,

        phone:
            document.getElementById("phone").value,

        department:
            document.getElementById("department").value,

        academicYear:
            document.getElementById("year").value,

        semester:
            document.getElementById("semester").value,

        dob:
            document.getElementById("dob").value,

        gender:
            document.getElementById("gender").value,

        password:
            password

    };


    // Save student

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );


    showSuccess("Registration Successful!");


    window.location.href =
        "student-login.html";

}


// ================= Student Login =================

export function loginStudent() {

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();


    if (email === "" || password === "") {

        showError("Please fill all required fields!");

        return;

    }


    let studentData =
        localStorage.getItem("student");


    if (!studentData) {

        showError("Please Register First.");

        return;

    }


    let student =
        JSON.parse(studentData);


    if (
        student.email.trim() === email &&
        student.password.trim() === password
    ) {

        // Save current user

        setUser(student, "student");


        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(student)
        );

        localStorage.setItem(
            "userType",
            "student"
        );


        showSuccess("Student Login Successful!");


        window.location.href =
            "student-dashboard.html";

    }

    else {

        showError("Invalid Email or Password!");

    }

}


// ================= Admin Login =================

export function loginAdmin() {

    let email =
        document.getElementById("adminEmail").value.trim();

    let password =
        document.getElementById("adminPassword").value.trim();


    if (email === "" || password === "") {

        showError("Please fill all required fields!");

        return;

    }


    let adminData =
        localStorage.getItem("admin");


    if (!adminData) {

        let admin = {

            email: "admin@gmail.com",
            password: "admin123"

        };

        localStorage.setItem(
            "admin",
            JSON.stringify(admin)
        );

        adminData =
            JSON.stringify(admin);

    }


    let admin =
        JSON.parse(adminData);


    if (
        email === admin.email &&
        password === admin.password
    ) {

        setUser(admin, "admin");


        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(admin)
        );

        localStorage.setItem(
            "userType",
            "admin"
        );


        showSuccess(
            "Admin Login Successful!"
        );


        window.location.href =
            "admin-dashboard.html";

    }

    else {

        showError(
            "Invalid Admin Email or Password!"
        );

    }

}


// ================= Logout =================

export function logoutUser() {

    let confirmLogout =
        showConfirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {

        return;

    }


    localStorage.removeItem(
        "loggedInUser"
    );

    localStorage.removeItem(
        "userType"
    );


    clearState();


    showSuccess(
        "Logged out successfully."
    );


    window.location.href =
        "../home.html";

}