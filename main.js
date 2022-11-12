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

document.addEventListener("scroll", () => {
  if (window.scrollY > 1500) {
    navBarMenu.style.color = "black";
    navBarMenu.style.transition = "color 2s ease";
    togglebtn.style.color = "black";
    togglebtn.style.transition = "color 2s ease";
  } else {
    navBarMenu.style.color = "white";
    navBarMenu.style.transition = "color 2s ease";
    togglebtn.style.color = "white";
    togglebtn.style.transition = "color 2s ease";
  }
});
document.addEventListener("scroll", () => {
  const HTML = document.querySelector(".HTML");
  const CSS = document.querySelector(".CSS");
  const JS = document.querySelector(".JS");
  const React = document.querySelector(".React");
  const Node = document.querySelector(".Node");

  if (window.scrollY > 1400) {
    HTML.style.width = "70%";
    CSS.style.width = "60%";
    JS.style.width = "70%";
    React.style.width = "50%";
    Node.style.width = "50%";
    HTML.style.transitionTimingFunction = "easy-out";
    HTML.style.transitionDuration = "3s";
    CSS.style.transitionTimingFunction = "easy-out";
    CSS.style.transitionDuration = "3s";
    JS.style.transitionTimingFunction = "easy-out";
    JS.style.transitionDuration = "3s";
    React.style.transitionTimingFunction = "easy-out";
    React.style.transitionDuration = "3s";
    Node.style.transitionTimingFunction = "easy-out";
    Node.style.transitionDuration = "3s";
  } else {
  }
});
