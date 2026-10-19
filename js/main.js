const menuToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        const label = menuToggle.querySelector(".sr-only");
        if (label) label.textContent = isOpen ? "Tanca el menú" : "Obre el menú";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            const label = menuToggle.querySelector(".sr-only");
            if (label) label.textContent = "Obre el menú";
        });
    });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();
