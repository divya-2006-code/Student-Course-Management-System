const STORAGE_KEYS = {
    students: "scms_students",
    admins: "scms_admins",
    courses: "scms_courses",
    enrolledCourses: "scms_enrolled_courses",
    progress: "scms_progress",
    notifications: "scms_notifications",
    settings: "scms_settings",
    studentSession: "scms_student_session",
    adminSession: "scms_admin_session"
};


function initializeStorage() {

    if (!localStorage.getItem(STORAGE_KEYS.students)) {
        localStorage.setItem(
            STORAGE_KEYS.students,
            JSON.stringify(defaultStudents)
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.admins)) {
        localStorage.setItem(
            STORAGE_KEYS.admins,
            JSON.stringify(defaultAdmins)
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.courses)) {
        localStorage.setItem(
            STORAGE_KEYS.courses,
            JSON.stringify(courses)
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.enrolledCourses)) {
        localStorage.setItem(
            STORAGE_KEYS.enrolledCourses,
            JSON.stringify([])
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.progress)) {
        localStorage.setItem(
            STORAGE_KEYS.progress,
            JSON.stringify({})
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.notifications)) {
        localStorage.setItem(
            STORAGE_KEYS.notifications,
            JSON.stringify(notifications)
        );
    }

    if (!localStorage.getItem(STORAGE_KEYS.settings)) {
        localStorage.setItem(
            STORAGE_KEYS.settings,
            JSON.stringify({
                platformName: "SCMS",
                email: "support@scms.com"
            })
        );
    }
}


function getData(key) {

    const data = localStorage.getItem(key);

    if (!data) {
        return null;
    }

    try {
        return JSON.parse(data);
    } catch {
        return data;
    }
}


function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );
}


function getCourses() {
    return getData(STORAGE_KEYS.courses) || [];
}


function getStudents() {
    return getData(STORAGE_KEYS.students) || [];
}


function getEnrolledCourses() {
    return getData(
        STORAGE_KEYS.enrolledCourses
    ) || [];
}


function getProgress() {
    return getData(
        STORAGE_KEYS.progress
    ) || {};
}


function getNotifications() {
    return getData(
        STORAGE_KEYS.notifications
    ) || [];
}


initializeStorage();