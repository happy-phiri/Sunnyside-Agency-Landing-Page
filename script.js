const toggleBtn = document.querySelector("#toggle-btn");
const navLinks = document.querySelector(".navbar-links");
const triangle = document.querySelector(".triangle");
const body = document.querySelector("body")
let viewWindow = window.innerWidth;

toggleBtn.addEventListener("click", () => {
    if (navLinks.classList.contains("show-links")){
        navLinks.classList.remove("show-links");
        triangle.classList.remove("show-links") ;       
    } else {
        navLinks.classList.add("show-links");
        triangle.classList.add("show-links") ;
    }
});

body.addEventListener("resize", () => {
    if (viewWindow < 768){
        navLinks.classList.add("show-links");
        triangle.classList.add("show-links");
    }
})