import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CourseCard from "../../components/CourseCard";

function Courses() {

    const courses = [
        {
            id: 1,
            title: "HTML & CSS",
            category: "Web Development",
            instructor: "John David",
            duration: "4 Weeks",
            level: "Beginner",
            description: "Learn the basics of HTML and CSS and build responsive web pages."
        },
        {
            id: 2,
            title: "JavaScript",
            category: "Frontend Development",
            instructor: "Emily",
            duration: "6 Weeks",
            level: "Intermediate",
            description: "Learn JavaScript fundamentals and create interactive web applications."
        },
        {
            id: 3,
            title: "Python Programming",
            category: "Programming",
            instructor: "Robert",
            duration: "8 Weeks",
            level: "Beginner",
            description: "Learn Python programming from the basics to practical applications."
        },
        {
            id: 4,
            title: "React Development",
            category: "Web Development",
            instructor: "Michael",
            duration: "6 Weeks",
            level: "Intermediate",
            description: "Build modern web applications using React and reusable components."
        },
        {
            id: 5,
            title: "Data Science",
            category: "Data Analytics",
            instructor: "Sophia",
            duration: "8 Weeks",
            level: "Intermediate",
            description: "Learn data analysis, visualization and basic machine learning concepts."
        },
        {
            id: 6,
            title: "Machine Learning",
            category: "Artificial Intelligence",
            instructor: "Daniel",
            duration: "10 Weeks",
            level: "Advanced",
            description: "Understand machine learning algorithms and build predictive models."
        }
    ];

    return (
        <>
            <Navbar />

            <main className="courses-page">

                <section className="courses-header">

                    <span className="hero-badge">
                        Student Learning Platform
                    </span>

                    <h1>Browse Courses</h1>

                    <p>
                        Explore our courses and choose the right
                        learning path for your goals.
                    </p>

                </section>

                <section className="courses-section">

                    <div className="course-grid">

                        {courses.map((course) => (
                            <CourseCard
                                key={course.id}
                                {...course}
                            />
                        ))}

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Courses;