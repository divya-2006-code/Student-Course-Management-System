// ================= Validation Module =================

export function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

export function validateRequired(value) {

    return value.trim() !== "";

}

export function checkPasswords(password, confirmPassword) {

    return password === confirmPassword;

}