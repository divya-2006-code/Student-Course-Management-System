const {
  registerStudent,
  loginStudent
} = require("../services/authService");

const register = async (req, res) => {
  try {
    const student = await registerStudent(req.body);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: student
    });
  } catch (error) {
    const statusCode =
      error.message === "Email is already registered" ? 409 : 400;

    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const student = await loginStudent(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: student
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  register,
  login
};