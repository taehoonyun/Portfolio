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
function bg(x) {
  const about = document.querySelector(".about");
  const bgImg = document.createElement("img");
  bgImg.style.backgroundImage =
    "linear-gradient(to bottom,#121d31,gray, #aaf0d1, white)";
  bgImg.style.height = "420vh";
  bgImg.style.width = "100%";
  bgImg.style.zIndex = -2;
  bgImg.style.position = "absolute";
  bgImg.style.top = "99%";
  bgImg.style.left = 0;
  about.appendChild(bgImg);
  if (x.matches) {
    bgImg.style.height = "620vh";
  } else {
    bgImg.style.height = "420vh";
  }
}

background();

var x = window.matchMedia("(max-width: 768px)");
bg(x);
x.addListener(bg(x));
