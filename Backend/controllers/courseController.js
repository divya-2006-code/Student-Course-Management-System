const courses = require("../data/courses");

const getCourses = (req, res) => {
  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses
  });
};

const getCourseById = (req, res) => {
  const course = courses.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  res.status(200).json({
    success: true,
    data: course
  });
};

const addCourse = (req, res) => {
  const {
    courseName,
    courseCode,
    instructor,
    duration,
    category,
    level,
    status,
    imageUrl,
    description,
    price
  } = req.body;

  if (!courseName || !courseCode || !instructor || !duration || !category) {
    return res.status(400).json({
      success: false,
      message: "Course name, course code, instructor, duration, and category are required"
    });
  }

  const newCourse = {
    id: courses.length
      ? Math.max(...courses.map((item) => item.id)) + 1
      : 1,
    courseName,
    courseCode,
    instructor,
    duration,
    category,
    level: level || "Beginner",
    status: status || "Active",
    imageUrl: imageUrl || "",
    description: description || "",
    price: price ?? 0
  };

  courses.push(newCourse);

  res.status(201).json({
    success: true,
    message: "Course added successfully",
    data: newCourse
  });
};
const updateCourse = (req, res) => {
  const course = courses.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  Object.assign(course, req.body, { id: course.id });

  res.status(200).json({
    success: true,
    message: "Course updated successfully",
    data: course
  });
};

const deleteCourse = (req, res) => {
  const index = courses.findIndex(
    (item) => item.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  const deletedCourse = courses.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "Course deleted successfully",
    data: deletedCourse
  });
};

module.exports = {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse
};