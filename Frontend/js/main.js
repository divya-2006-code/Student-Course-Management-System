document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeStorage();

        setupMobileMenu();

        updateCurrentYear();

        setupSmoothNavigation();

    }
);


function setupMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenuBtn"
        );

    const menu =
        document.getElementById(
            "mobileMenu"
        );

    if (!button || !menu) {
        return;
    }

    button.addEventListener(
        "click",
        function () {

            const visible =
                menu.style.display === "block";

            menu.style.display =
                visible ? "none" : "block";

            button.innerHTML = visible
                ? '<i class="fa-solid fa-bars"></i>'
                : '<i class="fa-solid fa-xmark"></i>';

        }
    );


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                function () {

                    menu.style.display =
                        "none";

                    button.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';

                }
            );

        });
}


function setupSmoothNavigation() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (
                        targetId === "#" ||
                        !targetId
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        });
}