window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});