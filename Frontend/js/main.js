// ================= Main JavaScript Module =================

import {
    registerStudent,
    loginStudent,
    loginAdmin,
    logoutUser
} from "./auth.js";

import {
    updateGreeting,
    updateDate,
    updateYear,
    showMessage
} from "./ui.js";


// ================= Page Load =================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Student Course Management System Loaded"
        );


        updateGreeting();

        updateDate();

        updateYear();


        // ================= Sidebar =================

        const links =
            document.querySelectorAll(
                ".sidebar a"
            );


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    links.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add("active");

                }
            );

        });


        // ================= Registration =================

        const registerForm =
            document.getElementById(
                "registerForm"
            );


        if (registerForm) {

            registerForm.addEventListener(
                "submit",
                function (e) {

                    e.preventDefault();

                    registerStudent();

                }
            );

        }


        // ================= Student Login =================

        const studentLoginForm =
            document.getElementById(
                "studentLoginForm"
            );


        if (studentLoginForm) {

            studentLoginForm.addEventListener(
                "submit",
                function (e) {

                    e.preventDefault();

                    loginStudent();

                }
            );

        }


        // ================= Admin Login =================

        const adminLoginForm =
            document.getElementById(
                "adminLoginForm"
            );


        if (adminLoginForm) {

            adminLoginForm.addEventListener(
                "submit",
                function (e) {

                    e.preventDefault();

                    loginAdmin();

                }
            );

        }


        // ================= Logout =================

        const logoutLinks =
            document.querySelectorAll(
                ".logout-link"
            );


        logoutLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (e) {

                        e.preventDefault();

                        logoutUser();

                    }
                );

            }
        );


        // ================= Student Search =================

        const studentSearch =
            document.getElementById(
                "studentSearch"
            );


        if (studentSearch) {

            studentSearch.addEventListener(
                "keyup",
                function () {

                    let value =
                        this.value.toLowerCase();


                    let rows =
                        document.querySelectorAll(
                            "#studentTable tbody tr"
                        );


                    rows.forEach(
                        function (row) {

                            row.style.display =
                                row.innerText
                                    .toLowerCase()
                                    .includes(value)
                                    ? ""
                                    : "none";

                        }
                    );

                }
            );

        }


        // ================= Course Search =================

        const courseSearch =
            document.getElementById("search");


        if (courseSearch) {

            courseSearch.addEventListener(
                "keyup",
                function () {

                    let value =
                        this.value.toLowerCase();


                    let courses =
                        document.querySelectorAll(
                            ".course-card"
                        );


                    courses.forEach(
                        function (course) {

                            let text =
                                course.innerText
                                    .toLowerCase();


                            if (
                                text.includes(value)
                            ) {

                                course.parentElement
                                    .style.display = "";

                            }

                            else {

                                course.parentElement
                                    .style.display =
                                    "none";

                            }

                        }
                    );

                }
            );

        }

    }
);


// ================= Progress =================

let progress = 0;


export function increaseProgress() {

    if (progress < 100) {

        progress += 10;

    }


    let bar =
        document.getElementById(
            "progressBar"
        );


    if (bar) {

        bar.style.width =
            progress + "%";

        bar.innerHTML =
            progress + "%";

    }

}


export function resetProgress() {

    progress = 0;


    let bar =
        document.getElementById(
            "progressBar"
        );


    if (bar) {

        bar.style.width = "0%";

        bar.innerHTML = "0%";

    }

}


// ================= Certificate =================

export function downloadCertificate() {

    window.print();

}