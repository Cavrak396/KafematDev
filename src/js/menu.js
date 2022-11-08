/*VARIABLES FOR MENU*/

//All buttons
let buttons = document.querySelector(".menu__buttons");
let breakfast_button = document.querySelector(".button--breakfast");
let sandwich_button = document.querySelector(".button--sandwich");
let apetizzer_button = document.querySelector(".button--appetizer");
let salat_button = document.querySelector(".button--salat");
let pizza_button = document.querySelector(".button--pizza");
let just_button = document.querySelector(".button--just");
let main_button = document.querySelector(".button--main");
let kids_button = document.querySelector(".button--kids");
let pasta_button = document.querySelector(".button--pasta");
let sea_button = document.querySelector(".button--sea");
let salates_button = document.querySelector(".button--second__salat");
let desserts_button = document.querySelector(".button--desserts");
let adders_button = document.querySelector(".button--adder");

//All menu items
let main_menu = document.querySelector(".menu__food");
let breakfast = document.querySelector(".breakfast");
let sandwich = document.querySelector(".sandwich");
let appetizer = document.querySelector(".apetizzer");
let salat_meal = document.querySelector(".salat");
let pizza = document.querySelector(".pizza");
let just = document.querySelector(".just");
let main = document.querySelector(".main-food");
let kids = document.querySelector(".kids");
let pasta = document.querySelector(".pasta");
let sea = document.querySelector(".sea");
let salates = document.querySelector(".salates");
let desserts = document.querySelector(".desserts");
let adders = document.querySelector(".adders");

//Activations
let appear = "appear";
let disappear = "disappear";
let unactive = "unactive";
let clicked = "clicked";
//Functions

//Breakfast === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  breakfast_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    breakfast_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  breakfast_button.addEventListener("click", () => {
    main_menu.classList.remove(appear);
    breakfast.classList.toggle(appear);
  })
);

//Sandwich === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  sandwich_button.addEventListener("click", () => {
    sandwich_button.classList.toggle(clicked);
    buttons.classList.remove(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  sandwich_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    sandwich.classList.toggle(appear);
    main_menu.classList.remove(appear);
  })
);

//Apetizzer === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  apetizzer_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    apetizzer_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  apetizzer_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    main_menu.classList.remove(appear);
    appetizer.classList.toggle(appear);
  })
);

//Salat === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  salat_button.addEventListener("click", () => {
    salat_button.classList.toggle(clicked);
    buttons.classList.remove(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  salat_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    salat_meal.classList.toggle(appear);
    main_menu.classList.remove(appear);
  })
);

//Pizza === Buttons and List

document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  pizza_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    pizza_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  pizza_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    main_menu.classList.remove(appear);
    pizza.classList.toggle(appear);
  })
);
//Just keep === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  just_button.addEventListener("click", () => {
    just_button.classList.toggle(clicked);
    buttons.classList.remove(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  just_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    just.classList.toggle(appear);
    main_menu.classList.remove(appear);
  })
);
//Main === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  main_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    main_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  main_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    main_menu.classList.remove(appear);
    main.classList.toggle(appear);
  })
);
//Kids === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  kids_button.addEventListener("click", () => {
    kids_button.classList.toggle(clicked);
    buttons.classList.remove(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  kids_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    kids.classList.toggle(appear);
    main_menu.classList.remove(appear);
  })
);
//Pasta === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  pasta_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    pasta_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  pasta_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    main_menu.classList.remove(appear);
    pasta.classList.toggle(appear);
  })
);
//Sea === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  sea_button.addEventListener("click", () => {
    sea_button.classList.toggle(clicked);
    buttons.classList.remove(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  sea_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    sea.classList.toggle(appear);
    main_menu.classList.remove(appear);
  })
);
//Salates === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  salates_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    salates_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  salates_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    main_menu.classList.remove(appear);
    salates.classList.toggle(appear);
  })
);

//Desserts === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  desserts_button.addEventListener("click", () => {
    desserts_button.classList.toggle(clicked);
    buttons.classList.remove(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  desserts_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    desserts.classList.toggle(appear);
    main_menu.classList.remove(appear);
  })
);
//Adders === Buttons and List
document.querySelectorAll(".menu__buttons").forEach((buttons) =>
  adders_button.addEventListener("click", () => {
    buttons.classList.remove(clicked);
    adders_button.classList.toggle(clicked);
  })
);
document.querySelectorAll(".menu__food").forEach((main_menu) =>
  adders_button.addEventListener("click", () => {
    breakfast.classList.remove(appear);
    main_menu.classList.remove(appear);
    adders.classList.toggle(appear);
  })
);
