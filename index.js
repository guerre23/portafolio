const navTooggle = document.querySelector(".nav-tooggle")
const navMenu = document.querySelector(".nav-menu")

navTooggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
}); 

