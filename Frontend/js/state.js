// ================= State Management =================

let currentUser = null;
let userType = null;
let selectedCourse = null;


// ================= Set User =================

export function setUser(user, type) {

    currentUser = user;
    userType = type;

}


// ================= Get User =================

export function getUser() {

    return currentUser;

}


// ================= Get User Type =================

export function getUserType() {

    return userType;

}


// ================= Selected Course =================

export function setSelectedCourse(course) {

    selectedCourse = course;

}

export function getSelectedCourse() {

    return selectedCourse;

}


// ================= Clear State =================

export function clearState() {

    currentUser = null;
    userType = null;
    selectedCourse = null;

}