import React from "react";
import { Link } from "react-router-dom";

function CourseCard({
    id,
    title,
    category,
    instructor,
    duration,
    level,
    description
}) {
    return (
        <div className="course-card">

            <div className="course-icon">
                📘
            </div>

            <span className="badge">
                {level}
            </span>

            <h3>
                {title}
            </h3>

            <p className="category">
                {category}
            </p>

            <p>
                {description}
            </p>

            <div className="course-info">
                <span>
                    👨‍🏫 {instructor}
                </span>

                <span>
                    ⏱ {duration}
                </span>
            </div>

            <Link
                className="primary-btn"
                to={`/student/course-details/${id}`}
            >
                View Details
            </Link>

        </div>
    );
}

export default CourseCard;