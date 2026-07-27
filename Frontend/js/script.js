const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

window.onload = function () {

    console.log("Student Course Management System Loaded");

};

function logoutUser(){

    let answer = confirm("Are you sure you want to logout?");

    if(answer){

        alert("Logged out successfully.");

        return true;

    }

    return false;

}

function updateStudentNotificationCount(count) {

    let notify = document.getElementById("studentNotifyCount");

    if (notify) {

        notify.innerHTML = count;

    }

}


function updateAdminNotificationCount(count) {

    let notify = document.getElementById("adminNotifyCount");

    if (notify) {

        notify.innerHTML = count;

    }

}
let today = new Date();

let date = document.getElementById("today");

if(date){

    date.innerHTML = today.toDateString();

}

let hour = new Date().getHours();

let text = "";

if(hour < 12){

    text = "Good Morning";

}

else if(hour < 17){

    text = "Good Afternoon";

}

else{

    text = "Good Evening";

}

let greet = document.getElementById("greeting");

if(greet){

    greet.innerHTML = text;

}

function showMessage() {

    alert("Welcome to Student Course Management System");

}

let year = document.getElementById("year");

if(year){

    year.innerHTML =

    "© " + new Date().getFullYear() +

    " Student Course Management and Learning Progress Tracking System";

}

window.addEventListener("load",function(){

    console.log("All resources loaded.");

});

// Student Registration Validation

let registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let registerNo = document.getElementById("registerNo").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let department = document.getElementById("department").value;
        let year = document.getElementById("year").value;
        let semester = document.getElementById("semester").value;
        let dob = document.getElementById("dob").value;
        let gender = document.getElementById("gender").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if(fullName=="" || registerNo=="" || email=="" || phone=="" ||
        department=="" || year=="" || semester=="" ||
        dob=="" || gender=="" || password=="" || confirmPassword==""){

            alert("Please fill all the fields.");
            return;

        }

        if(password != confirmPassword){

            alert("Passwords do not match.");
            return;

        }

        alert("Registration Successful!");

        registerForm.reset();

    });

}

// Student Login Validation

let studentLoginForm = document.getElementById("studentLoginForm");

if(studentLoginForm){

    studentLoginForm.addEventListener("submit", function(e){

        e.preventDefault();

        let email = document.getElementById("studentEmail").value;

        let password = document.getElementById("studentPassword").value;

        if(email == "" || password == ""){

            alert("Please enter Email and Password.");

            return;

        }

        if(password.length < 6){

            alert("Password must contain at least 6 characters.");

            return;

        }

        alert("Student Login Successful.");

        window.location.href = "student-dashboard.html";

    });

}

// ================= Admin Login Validation =================

let adminLoginForm = document.getElementById("adminLoginForm");

if(adminLoginForm){

    adminLoginForm.addEventListener("submit", function(e){

        e.preventDefault();

        let email = document.getElementById("adminEmail").value;

        let password = document.getElementById("adminPassword").value;

        if(email == "" || password == ""){

            alert("Please enter Email and Password.");

            return;

        }

        if(password.length < 6){

            alert("Password must contain at least 6 characters.");

            return;

        }

        alert("Admin Login Successful.");

        window.location.href = "admin-dashboard.html";

    });

}

// ================= Add Course =================
let editRow = null;
let courseForm = document.getElementById("courseForm");

if (courseForm) {

    courseForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let code = document.getElementById("courseCode").value;
        let name = document.getElementById("courseName").value;
        let department = document.getElementById("department").value;
        let instructor = document.getElementById("instructor").value;
        let credits = document.getElementById("credits").value;
        let semester = document.getElementById("semester").value;
        let status = document.getElementById("status").value;
		
		// ================= Local Storage =================

let courses = JSON.parse(localStorage.getItem("courses")) || [];

courses.push({

    code: code,
    name: name,
    department: department,
    instructor: instructor,
    credits: credits,
    semester: semester,
    status: status

});

localStorage.setItem("courses", JSON.stringify(courses));


        let badge = "";

        if (status == "Active") {

            badge = '<span class="badge bg-success">Active</span>';

        } else {

            badge = '<span class="badge bg-danger">Inactive</span>';

        }

        let table = document.getElementById("courseTable");

       let row;

if (editRow == null) {

    row = table.insertRow();

}
else {

    row = editRow;

}

        row.innerHTML = `
<td>${code}</td>
<td>${name}</td>
<td>${department}</td>
<td>${instructor}</td>
<td>${credits}</td>
<td>${semester}</td>
<td>${badge}</td>

<td>

<button class="btn btn-info btn-sm">
<i class="fa-solid fa-eye"></i>
</button>

<button class="btn btn-warning btn-sm editBtn">
<i class="fa-solid fa-pen"></i>
</button>

<button class="btn btn-danger btn-sm deleteBtn">
<i class="fa-solid fa-trash"></i>
</button>

</td>
`;
editRow = null;

// ================= Edit Course =================

document.addEventListener("click", function (e) {

    if (e.target.closest(".editBtn")) {

        editRow = e.target.closest("tr");

        document.getElementById("courseCode").value =
        editRow.cells[0].innerHTML;

        document.getElementById("courseName").value =
        editRow.cells[1].innerHTML;

        document.getElementById("department").value =
        editRow.cells[2].innerHTML;

        document.getElementById("instructor").value =
        editRow.cells[3].innerHTML;

        document.getElementById("credits").value =
        editRow.cells[4].innerHTML;

        document.getElementById("semester").value =
        editRow.cells[5].innerHTML;

        if (editRow.cells[6].innerText.includes("Active")) {

            document.getElementById("status").value = "Active";

        }

        else {

            document.getElementById("status").value = "Inactive";

        }

        alert("Edit the details and click Save Course.");

    }

});

        alert("Course Added Successfully!");

        courseForm.reset();

    });

}

// ================= Delete Course =================

document.addEventListener("click", function (e) {

    if (e.target.closest(".deleteBtn")) {

        let row = e.target.closest("tr");

        let answer = confirm("Are you sure you want to delete this course?");

        if (answer) {

            row.remove();

            alert("Course Deleted Successfully!");

        }

    }

});

// ================= Search Students =================

let studentSearch = document.getElementById("studentSearch");

if (studentSearch) {

    studentSearch.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let table = document.getElementById("studentTable");

        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {

            let text = rows[i].innerText.toLowerCase();

            if (text.indexOf(value) > -1) {

                rows[i].style.display = "";

            }

            else {

                rows[i].style.display = "none";

            }

        }

    });

}

// -------------------- Notification System --------------------

let notificationForm = document.getElementById("adminNotificationForm");

if (notificationForm) {

    notificationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let title = document.getElementById("adminTitle").value;
        let recipient = document.getElementById("adminRecipient").value;
        let priority = document.getElementById("adminPriority").value;

        let table = document.getElementById("notificationTable");

        let row = table.insertRow();

        row.innerHTML = `
        <td>NEW</td>
        <td>${title}</td>
        <td>${recipient}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${priority}</td>
        <td><span class="badge bg-success">Sent</span></td>
        <td>
            <button class="btn btn-danger btn-sm"
            onclick="deleteNotification(this)">
            <i class="fa-solid fa-trash"></i>
            </button>
        </td>
        `;

        let count = document.getElementById("adminNotifyCount");

        count.innerHTML = parseInt(count.innerHTML) + 1;

        alert("Notification Sent Successfully!");

        notificationForm.reset();

    });

}

function deleteNotification(button){

    if(confirm("Delete this notification?")){

        button.parentElement.parentElement.remove();

        let count = document.getElementById("adminNotifyCount");

        count.innerHTML = parseInt(count.innerHTML) - 1;

    }

}

// ---------------- Progress Bar ----------------

let progress = 0;

function increaseProgress() {

    if (progress < 100) {

        progress += 10;

    }

    let bar = document.getElementById("progressBar");

    if (bar) {

        bar.style.width = progress + "%";

        bar.innerHTML = progress + "%";

    }

    if (progress == 100) {

        alert("Course Completed Successfully!");

    }

}

function resetProgress() {

    progress = 0;

    let bar = document.getElementById("progressBar");

    if (bar) {

        bar.style.width = "0%";

        bar.innerHTML = "0%";

    }

}



function downloadCertificate() {

    alert("Certificate Download Started");

    window.print();

}

// ---------------- Student Registration ----------------

let registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

let student={

name:document.getElementById("fullName").value,

regno:document.getElementById("registerNo").value,

email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

password:document.getElementById("password").value

};

localStorage.setItem("student",JSON.stringify(student));

alert("Registration Successful");

registerForm.reset();

});

}

// ---------------- Student Login ----------------

let studentLogin=document.getElementById("studentLoginForm");

if(studentLogin){

studentLogin.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

let student=JSON.parse(localStorage.getItem("student"));

if(student && student.email==email && student.password==password){

alert("Login Successful");

window.location="student-dashboard.html";

}

else{

alert("Invalid Email or Password");

}

});

}