"use strict";

const navBarMenu = document.querySelector(".navbar__menu");
navBarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  if (link == "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
});
const home_contact = document.querySelector(".home__contact");
home_contact.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

const togglebtn = document.querySelector(".navbar__toggle_btn");
const toggle = document.querySelector(".navbar__menu");
togglebtn.addEventListener("click", () => {
  toggle.classList.toggle("hidden");
});

const home = document.querySelector(".home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

document.addEventListener("scroll", () => {
  const desk = document.querySelector(".desk");
  const me = document.querySelector(".me");
  if (window.scrollY > 1300) {
    desk.style.visibility = "visible";
    desk.style.animation = "appear 2s ease-in";
    setTimeout(() => {
      me.style.visibility = "visible";
      me.style.animation = "appear 2s ease-in";
    }, 2000);
  }
});

document.addEventListener("scroll", () => {
  const HTML = document.querySelector(".HTML");
  const CSS = document.querySelector(".CSS");
  const JS = document.querySelector(".JS");
  const React = document.querySelector(".React");
  const Node = document.querySelector(".Node");

  if (window.scrollY > 2400) {
    HTML.style.width = "70%";
    CSS.style.width = "70%";
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
