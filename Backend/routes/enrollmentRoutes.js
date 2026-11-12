
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  enrollCourse,
  getMyCourses,
  unenrollCourse
} = require("../controllers/enrollmentController");

// Get student's enrolled courses
router.get(
  "/my-courses",
  protect,
  authorizeRoles("student"),
  getMyCourses
);

// Enroll in a course
router.post(
  "/",
  protect,
  authorizeRoles("student"),
  enrollCourse
);

// Unenroll from a course
router.delete(
  "/:courseId",
  protect,
  authorizeRoles("student"),
  unenrollCourse
);

module.exports = router;
