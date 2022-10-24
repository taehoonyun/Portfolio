"use strict";

const navBarMenu = document.querySelector(".navbar__menu");
navBarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

const togglebtn = document.querySelector(".navbar__toggle_btn");
const togle = document.querySelector(".navbar__menu");
togglebtn.addEventListener("click", () => {
  togle.classList.toggle("hidden");
});

const home = document.querySelector(".main_contents");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
