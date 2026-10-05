import React, { useState } from "react";
import { useCourses } from "../../context/CourseContext";
import "./Courses.css";

function Courses() {

    const {
        courses,
        loading,
        error,
        addCourse,
        updateCourse,
        deleteCourse
    } = useCourses();

    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        courseName: "",
        courseCode: "",
        instructor: "",
        duration: "",
        level: "Beginner",
        category: "",
        image: "",
        status: "Active",
        overview: "",
        learningOutcomes: [],
        modules: []
    });

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            if (editingId) {

                await updateCourse(
                    editingId,
                    formData
                );

                alert("Course updated successfully.");

            } else {

                await addCourse(formData);

                alert("Course added successfully.");

            }

            resetForm();

        } catch (error) {

            alert("Unable to save course.");

        }
    };

    const handleEdit = (course) => {

        setEditingId(course.id);

        setFormData({
            courseName: course.courseName || "",
            courseCode: course.courseCode || "",
            instructor: course.instructor || "",
            duration: course.duration || "",
            level: course.level || "Beginner",
            category: course.category || "",
            image: course.image || "",
            status: course.status || "Active",
            overview: course.overview || "",
            learningOutcomes: course.learningOutcomes || [],
            modules: course.modules || []
        });

        setShowForm(true);
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteCourse(id);

            alert("Course deleted successfully.");

        } catch (error) {

            alert("Unable to delete course.");

        }
    };

    const resetForm = () => {

        setShowForm(false);
        setEditingId(null);

        setFormData({
            courseName: "",
            courseCode: "",
            instructor: "",
            duration: "",
            level: "Beginner",
            category: "",
            image: "",
            status: "Active",
            overview: "",
            learningOutcomes: [],
            modules: []
        });
    };

    return (
        <div className="admin-courses-page">

            <div className="admin-courses-header">

                <div>
                    <h1>Manage Courses</h1>

                    <p>
                        Add, edit and manage courses using the Mock API.
                    </p>
                </div>

                <button
                    className="add-course-btn"
                    onClick={() => {
                        resetForm();
                        setShowForm(true);
                    }}
                >
                    + Add Course
                </button>

            </div>


            {showForm && (

                <section className="course-form-card">

                    <div className="form-header">

                        <h2>
                            {editingId
                                ? "Edit Course"
                                : "Add New Course"}
                        </h2>

                        <button
                            onClick={resetForm}
                            className="close-form"
                        >
                            ×
                        </button>

                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">

                            <div className="form-group">

                                <label>
                                    Course Name
                                </label>

                                <input
                                    type="text"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Course Code
                                </label>

                                <input
                                    type="text"
                                    name="courseCode"
                                    value={formData.courseCode}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Instructor
                                </label>

                                <input
                                    type="text"
                                    name="instructor"
                                    value={formData.instructor}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Duration
                                </label>

                                <input
                                    type="text"
                                    name="duration"
                                    placeholder="Example: 6 Weeks"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Category
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Level
                                </label>

                                <select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                >

                                    <option>
                                        Beginner
                                    </option>

                                    <option>
                                        Intermediate
                                    </option>

                                    <option>
                                        Advanced
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >

                                    <option>
                                        Active
                                    </option>

                                    <option>
                                        Inactive
                                    </option>

                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Image URL
                                </label>

                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="Course image URL"
                                />

                            </div>

                        </div>


                        <div className="form-group">

                            <label>
                                Course Overview
                            </label>

                            <textarea
                                name="overview"
                                value={formData.overview}
                                onChange={handleChange}
                                rows="4"
                                required
                            />

                        </div>


                        <div className="form-buttons">

                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={resetForm}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="save-btn"
                            >
                                {editingId
                                    ? "Update Course"
                                    : "Add Course"}
                            </button>

                        </div>

                    </form>

                </section>

            )}


            <section className="admin-course-list">

                <div className="course-list-header">

                    <div>

                        <h2>
                            All Courses
                        </h2>

                        <p>
                            {courses.length} courses available
                        </p>

                    </div>

                </div>


                {loading && (

                    <div className="admin-message">
                        Loading courses...
                    </div>

                )}


                {error && (

                    <div className="admin-message error">
                        {error}
                    </div>

                )}


                {!loading &&
                    !error &&
                    courses.length === 0 && (

                        <div className="admin-message">
                            No courses available.
                        </div>

                    )}


                {!loading &&
                    !error &&
                    courses.length > 0 && (

                        <div className="admin-course-table">

                            <div className="table-header">

                                <span>Course</span>
                                <span>Instructor</span>
                                <span>Category</span>
                                <span>Level</span>
                                <span>Status</span>
                                <span>Actions</span>

                            </div>


                            {courses.map((course) => (

                                <div
                                    className="table-row"
                                    key={course.id}
                                >

                                    <div className="course-name-cell">

                                        <div className="small-course-icon">
                                            📚
                                        </div>

                                        <div>
                                            <strong>
                                                {course.courseName}
                                            </strong>

                                            <span>
                                                {course.courseCode}
                                            </span>
                                        </div>

                                    </div>


                                    <span>
                                        {course.instructor}
                                    </span>


                                    <span>
                                        {course.category}
                                    </span>


                                    <span>
                                        {course.level}
                                    </span>


                                    <span>

                                        <span
                                            className={
                                                course.status === "Active"
                                                    ? "status active-status"
                                                    : "status inactive-status"
                                            }
                                        >
                                            {course.status}
                                        </span>

                                    </span>


                                    <div className="action-buttons">

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                handleEdit(course)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(course.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

            </section>

        </div>
    );
}

export default Courses;