


let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".header__navbar");
let navLink = document.querySelector("header__list-link");
let bar = document.querySelectorAll(".bar");
let active = "active";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle(active);
  navMenu.classList.toggle(active);
});

document.querySelectorAll(".header__list-link").forEach((navLink) =>
  navLink.addEventListener("click", () => {
    hamburger.classList.remove(active);
    navMenu.classList.remove(active);
  })
  
);


