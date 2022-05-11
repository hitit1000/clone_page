const hamburger = document.querySelector(".headerBox__hamburger");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const menu = document.querySelector(".headerBox__menu");

let preWidth;

const changeScale = () => {
  if ((preWidth <= 1100) & (1100 < window.innerWidth)) {
    // web mode 진입
    nav.style.display = "block";
    menu.style.display = "flex";
  } else if ((window.innerWidth <= 1100) & (1100 < preWidth)) {
    // mobile mode 진입
    nav.style.display = "none";
    menu.style.display = "none";
  }
  preWidth = window.innerWidth;
};

const handleMenu = () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    menu.style.display = "none";
  } else {
    nav.style.display = "block";
    menu.style.display = "flex";
  }
};

window.addEventListener("resize", changeScale);
hamburger.addEventListener("click", handleMenu);
