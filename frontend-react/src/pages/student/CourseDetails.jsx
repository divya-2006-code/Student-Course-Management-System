import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseDetails() {

    const { id } = useParams();

    const courses = [
        {
            id: 1,
            title: "HTML & CSS",
            category: "Web Development",
            instructor: "John David",
            duration: "4 Weeks",
            level: "Beginner",
            modules: [
                "Introduction to HTML",
                "HTML Elements and Structure",
                "Forms and Tables",
                "Introduction to CSS",
                "CSS Selectors and Styling",
                "Flexbox",
                "CSS Grid",
                "Responsive Web Design"
            ],
            description:
                "Learn the basics of HTML and CSS and build responsive web pages.",
            requirements:
                "No prior programming knowledge is required.",
            learning:
                [
                    "Create structured web pages using HTML",
                    "Style web pages using CSS",
                    "Work with Flexbox and CSS Grid",
                    "Create responsive websites",
                    "Build practical web page projects"
                ]
        },

        {
            id: 2,
            title: "JavaScript",
            category: "Frontend Development",
            instructor: "Emily",
            duration: "6 Weeks",
            level: "Intermediate",
            modules: [
                "JavaScript Basics",
                "Variables and Data Types",
                "Functions",
                "Arrays and Objects",
                "DOM Manipulation",
                "Events",
                "ES6 Features",
                "Asynchronous JavaScript",
                "Fetch API",
                "Mini Project"
            ],
            description:
                "Learn JavaScript fundamentals and create interactive web applications.",
            requirements:
                "Basic knowledge of HTML and CSS is recommended.",
            learning:
                [
                    "Understand JavaScript fundamentals",
                    "Create interactive web pages",
                    "Work with the DOM",
                    "Handle user events",
                    "Use modern JavaScript features"
                ]
        },

        {
            id: 3,
            title: "Python Programming",
            category: "Programming",
            instructor: "Robert",
            duration: "8 Weeks",
            level: "Beginner",
            modules: [
                "Introduction to Python",
                "Variables and Data Types",
                "Operators",
                "Conditional Statements",
                "Loops",
                "Functions",
                "Lists and Tuples",
                "Dictionaries and Sets",
                "File Handling",
                "Exception Handling",
                "Object-Oriented Programming",
                "Mini Project"
            ],
            description:
                "Learn Python programming from the basics to practical applications.",
            requirements:
                "No prior programming knowledge is required.",
            learning:
                [
                    "Write Python programs",
                    "Use variables and data types",
                    "Create functions",
                    "Work with collections",
                    "Build simple Python projects"
                ]
        },

        {
            id: 4,
            title: "React Development",
            category: "Web Development",
            instructor: "Michael",
            duration: "6 Weeks",
            level: "Intermediate",
            modules: [
                "Introduction to React",
                "Components",
                "Props",
                "State",
                "Events",
                "React Hooks",
                "React Router",
                "Forms",
                "API Integration",
                "Final Project"
            ],
            description:
                "Build modern web applications using React and reusable components.",
            requirements:
                "Basic knowledge of HTML, CSS and JavaScript is recommended.",
            learning:
                [
                    "Understand React components",
                    "Manage application state",
                    "Use React Hooks",
                    "Create multiple pages using React Router",
                    "Build reusable user interfaces"
                ]
        },

        {
            id: 5,
            title: "Data Science",
            category: "Data Analytics",
            instructor: "Sophia",
            duration: "8 Weeks",
            level: "Intermediate",
            modules: [
                "Introduction to Data Science",
                "Python for Data Science",
                "NumPy",
                "Pandas",
                "Data Cleaning",
                "Data Visualization",
                "Matplotlib",
                "Exploratory Data Analysis",
                "Introduction to Machine Learning",
                "Data Science Project"
            ],
            description:
                "Learn data analysis, visualization and basic machine learning concepts.",
            requirements:
                "Basic Python knowledge is recommended.",
            learning:
                [
                    "Clean and prepare datasets",
                    "Analyze data using Python",
                    "Create data visualizations",
                    "Perform exploratory data analysis",
                    "Understand basic machine learning concepts"
                ]
        },

        {
            id: 6,
            title: "Machine Learning",
            category: "Artificial Intelligence",
            instructor: "Daniel",
            duration: "10 Weeks",
            level: "Advanced",
            modules: [
                "Introduction to Machine Learning",
                "Data Preprocessing",
                "Regression",
                "Classification",
                "Decision Trees",
                "Random Forest",
                "Clustering",
                "Model Evaluation",
                "Feature Engineering",
                "Machine Learning Project"
            ],
            description:
                "Understand machine learning algorithms and build predictive models.",
            requirements:
                "Python and basic mathematics knowledge are recommended.",
            learning:
                [
                    "Understand machine learning concepts",
                    "Prepare data for machine learning",
                    "Build regression models",
                    "Build classification models",
                    "Evaluate machine learning models"
                ]
        }
    ];

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    if (!course) {
        return (
            <div className="auth-page">

                <div className="auth-card">

                    <h1>Course Not Found</h1>

                    <p>
                        The selected course could not be found.
                    </p>

                    <Link
                        to="/student/courses"
                        className="primary-btn"
                    >
                        Back to Courses
                    </Link>

                </div>

            </div>
        );
    }

    return (
        <main className="course-details-page">

            <section className="course-details-header">

                <Link
                    to="/student/courses"
                    className="back-link"
                >
                    ← Back to Courses
                </Link>

                <span className="hero-badge">
                    {course.category}
                </span>

                <h1>
                    {course.title}
                </h1>

                <p>
                    {course.description}
                </p>

            </section>

            <section className="course-details-content">

                <div className="course-main">

                    <div className="details-card">

                        <h2>
                            About This Course
                        </h2>

                        <p>
                            {course.description}
                        </p>

                        <h2>
                            What You Will Learn
                        </h2>

                        <ul className="learning-list">

                            {course.learning.map(
                                (item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )
                            )}

                        </ul>

                        <h2>
                            Course Requirements
                        </h2>

                        <p>
                            {course.requirements}
                        </p>

                    </div>

                    <div className="details-card">

                        <h2>
                            Course Modules
                        </h2>

                        <div className="module-list">

                            {course.modules.map(
                                (module, index) => (
                                    <div
                                        className="module-item"
                                        key={index}
                                    >
                                        <span>
                                            {index + 1}
                                        </span>

                                        <p>
                                            {module}
                                        </p>
                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </div>

                <aside className="course-sidebar">

                    <div className="details-card">

                        <div className="course-large-icon">
                            📘
                        </div>

                        <h2>
                            {course.title}
                        </h2>

                        <div className="detail-item">
                            <span>👨‍🏫 Instructor</span>
                            <strong>
                                {course.instructor}
                            </strong>
                        </div>

                        <div className="detail-item">
                            <span>⏱ Duration</span>
                            <strong>
                                {course.duration}
                            </strong>
                        </div>

                        <div className="detail-item">
                            <span>📊 Level</span>
                            <strong>
                                {course.level}
                            </strong>
                        </div>

                        <div className="detail-item">
                            <span>📚 Modules</span>
                            <strong>
                                {course.modules.length}
                            </strong>
                        </div>

                        <button
                            className="primary-btn enroll-btn"
                        >
                            Enroll Now
                        </button>

                    </div>

                </aside>

            </section>

        </main>
    );
}

export default CourseDetails;