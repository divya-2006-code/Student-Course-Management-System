function loginStudent(email, password) {

    const students = getStudents();

    const student = students.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!student) {
        return {
            success: false,
            message: "Invalid email or password."
        };
    }

    saveData(
        STORAGE_KEYS.studentSession,
        student
    );

    return {
        success: true,
        student
    };
}


function loginAdmin(email, password) {

    const admins = getData(
        STORAGE_KEYS.admins
    ) || [];

    const admin = admins.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!admin) {
        return {
            success: false,
            message: "Invalid administrator credentials."
        };
    }

    saveData(
        STORAGE_KEYS.adminSession,
        admin
    );

    return {
        success: true,
        admin
    };
}


function getLoggedInStudent() {

    return getData(
        STORAGE_KEYS.studentSession
    );
}


function getLoggedInAdmin() {

    return getData(
        STORAGE_KEYS.adminSession
    );
}


function isStudentLoggedIn() {

    return !!getLoggedInStudent();
}


function isAdminLoggedIn() {

    return !!getLoggedInAdmin();
}


function logoutStudent() {

    localStorage.removeItem(
        STORAGE_KEYS.studentSession
    );

    window.location.href = "login.html";
}


function logoutAdmin() {

    localStorage.removeItem(
        STORAGE_KEYS.adminSession
    );

    window.location.href = "login.html";
}