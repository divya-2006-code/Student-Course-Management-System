function showToast(message, type = "success") {

    let container =
        document.querySelector(".toast-container");

    if (!container) {

        container = document.createElement("div");

        container.className =
            "toast-container";

        document.body.appendChild(container);
    }

    const toast =
        document.createElement("div");

    toast.className =
        `toast toast-${type}`;

    let icon =
        type === "success"
            ? "fa-circle-check"
            : "fa-circle-exclamation";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("hide");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}


function updateCurrentYear() {

    document
        .querySelectorAll("[data-year]")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });
}


function getCourseById(id) {

    return getCourses().find(
        course => course.id === id
    );
}


function formatNumber(number) {

    return Number(number).toLocaleString();
}


function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}