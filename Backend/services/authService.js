
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let configuredAdmin = null;

// Register Student
async function registerStudent({ name, email, password, department }) {
    const normalizedEmail = email.trim().toLowerCase();

    // Check existing student
    const existingStudent = await User.findOne({
        email: normalizedEmail
    });

    // Prevent duplicate admin email
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (existingStudent || normalizedEmail === adminEmail) {
        const error = new Error("Email is already registered");
        error.statusCode = 409;
        throw error;
    }

    // Hash student password
    const passwordHash = await bcrypt.hash(password, 12);

    try {
        const student = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            passwordHash,
            role: "student",
            department: department.trim()
        });

        return {
            id: student._id.toString(),
            name: student.name,
            email: student.email,
            role: student.role,
            department: student.department,
            createdAt: student.createdAt
                ? student.createdAt.toISOString()
                : null
        };

    } catch (error) {
        if (error.code === 11000) {
            const duplicateError = new Error("Email is already registered");
            duplicateError.statusCode = 409;
            throw duplicateError;
        }

        throw error;
    }
}

// Initialize Admin Account
async function initializeAdminAccount() {
    const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;

    if (!email && !password) {
        configuredAdmin = null;
        console.log("Admin configuration not found");
        return;
    }

    if (!email || !password) {
        throw new Error(
            "Both ADMIN_EMAIL and ADMIN_PASSWORD must be configured"
        );
    }

    // Validate admin email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        throw new Error("ADMIN_EMAIL must be a valid email address");
    }

    // Validate admin password
    if (password.length < 12 || password.length > 72) {
        throw new Error(
            "ADMIN_PASSWORD must be between 12 and 72 characters"
        );
    }

    // Create admin password hash
    const passwordHash = await bcrypt.hash(password, 12);

    configuredAdmin = {
        id: "configured-admin",
        name: "Administrator",
        email,
        passwordHash,
        role: "admin"
    };

    console.log("Admin Configuration Loaded Successfully!");
    console.log("Admin email loaded:", configuredAdmin.email);
    console.log("Admin password hash created:", !!configuredAdmin.passwordHash);
}

// Login Student or Admin
async function loginStudent({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();

    let user;

    // Check Admin
    if (configuredAdmin?.email === normalizedEmail) {
        user = configuredAdmin;
    } else {
        // Check Student in MongoDB
        user = await User.findOne({
            email: normalizedEmail
        });
    }

    // Check password
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }

    const userId = user._id
        ? user._id.toString()
        : user.id;

    // Generate JWT token
    const token = jwt.sign(
        {
            id: userId,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "1h"
        }
    );

    // Return public user details
    const publicUser = {
        id: userId,
        name: user.name,
        email: user.email,
        role: user.role
    };

    if (user.department !== undefined) {
        publicUser.department = user.department;
    }

    if (user.createdAt) {
        publicUser.createdAt =
            typeof user.createdAt === "string"
                ? user.createdAt
                : user.createdAt.toISOString();
    }

    return {
        user: publicUser,
        ...(user.role === "student"
            ? { student: publicUser }
            : {}),
        token
    };
}

module.exports = {
    registerStudent,
    loginStudent,
    initializeAdminAccount
};