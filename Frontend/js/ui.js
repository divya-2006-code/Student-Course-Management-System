// ================= UI Module =================

export function showSuccess(message) {

    alert(message);

}


export function showError(message) {

    alert(message);

}


export function showConfirm(message) {

    return confirm(message);

}


// ================= Greeting =================

export function updateGreeting() {

    let greeting = document.getElementById("greeting");

    if (!greeting) return;

    let hour = new Date().getHours();

    if (hour < 12) {

        greeting.innerHTML = "Good Morning";

    }

    else if (hour < 17) {

        greeting.innerHTML = "Good Afternoon";

    }

    else {

        greeting.innerHTML = "Good Evening";

    }

}


// ================= Date =================

export function updateDate() {

    let today = document.getElementById("today");

    if (today) {

        today.innerHTML =
            new Date().toDateString();

    }

}


// ================= Footer Year =================

export function updateYear() {

    let year = document.getElementById("year");

    if (year) {

        year.innerHTML =
            "© " +
            new Date().getFullYear() +
            " Student Course Management and Learning Progress Tracking System";

    }

}


// ================= Welcome Message =================

export function showMessage() {

    alert("Welcome to Student Course Management System");

}