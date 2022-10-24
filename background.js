function background() {
  const bgHome = document.querySelector(".home");
  const bgImg = document.createElement("img");
  bgImg.src = `https://i.postimg.cc/JhVqJKmS/main.jpg`;
  bgHome.appendChild(bgImg);
  bgImg.style.height = "100%";
  bgImg.style.width = "100%";
  bgImg.style.zIndex = -1;
  bgImg.style.position = "absolute";
  bgImg.style.top = 0;
  bgImg.style.left = 0;
}
function bgAbout() {
  const about = document.querySelector(".about");
  const bgImg = document.createElement("img");
  bgImg.src = `https://i.postimg.cc/W4sCcXfb/About.jpg`;
  about.appendChild(bgImg);
  bgImg.style.height = "100%";
  bgImg.style.width = "100%";
  bgImg.style.zIndex = -1;
  bgImg.style.position = "absolute";
  bgImg.style.top = "100%";
  // bgImg.style.left = 0;
}
function bgSkills() {
  const skills = document.querySelector(".skills");
  const bgImg = document.createElement("img");
  bgImg.src = `https://i.postimg.cc/DZT0qW6M/skills.jpg`;
  skills.appendChild(bgImg);
  bgImg.style.height = "100%";
  bgImg.style.width = "100%";
  bgImg.style.zIndex = -1;
  bgImg.style.position = "absolute";
  bgImg.style.top = "200%";
  // bgImg.style.left = 0;
}
function bgWork() {
  const myWork = document.querySelector(".Work");
  const bgImg = document.createElement("img");
  bgImg.src = `https://i.postimg.cc/zGMvd2z6/1784147.jpg`;
  myWork.appendChild(bgImg);
  bgImg.style.height = "100%";
  bgImg.style.width = "100%";
  bgImg.style.zIndex = -1;
  bgImg.style.position = "absolute";
  bgImg.style.top = "300%";
  // bgImg.style.left = 0;
}
function bgContact() {
  const Contact = document.querySelector(".contact");
  const bgImg = document.createElement("img");
  bgImg.src = `https://i.postimg.cc/15Rzynv9/45863.jpg`;
  Contact.appendChild(bgImg);
  bgImg.style.height = "100%";
  bgImg.style.width = "100%";
  bgImg.style.zIndex = -1;
  bgImg.style.position = "absolute";
  bgImg.style.top = "400%";
  // bgImg.style.left = 0;
}
background();
bgAbout();
bgSkills();
bgWork();
bgContact();
