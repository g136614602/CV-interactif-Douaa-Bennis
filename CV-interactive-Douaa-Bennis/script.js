window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("shadow", window.scrollY > 100);
});
