const toggler = document.querySelector(".toggler");
const nav = document.querySelector("nav");

toggler.addEventListener("click", () => nav.classList.toggle("visible"));

window.addEventListener("resize", () => {
    this.innerWidth < 370 ? toggler.classList.remove("fa-rotate-90") : toggler.classList.add("fa-rotate-90")
});