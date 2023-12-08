const menu = document.querySelector(".toggle_menu");
const nav = document.querySelector(".nav_bar");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  body.classList.toggle("show")
})
