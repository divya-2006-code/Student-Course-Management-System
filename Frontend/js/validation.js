function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);
}


function validateRequired(value) {

    return value &&
        value.trim().length > 0;
}


function validatePassword(password) {

    return password &&
        password.length >= 6;
}


function showFieldError(input, message) {

    const group =
        input.closest(".form-group");

    if (!group) return;

    let error =
        group.querySelector(".field-error");

    if (!error) {

        error =
            document.createElement("small");

        error.className =
            "field-error";

        group.appendChild(error);
    }

    error.textContent = message;

    input.classList.add("input-error");
}


function clearFieldError(input) {

    const group =
        input.closest(".form-group");

    if (!group) return;

    const error =
        group.querySelector(".field-error");

    if (error) {
        error.remove();
    }

    input.classList.remove(
        "input-error"
    );
}