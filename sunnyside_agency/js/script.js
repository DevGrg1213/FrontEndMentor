const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("active");
});

body.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});
