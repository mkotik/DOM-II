"use strict";
// Select DOM Elements
const headerTitle = document.querySelector(".logo-heading");
const nav = document.querySelector(".nav");
const picOne = document.querySelector(".intro img");
const introTitle = document.querySelector(".intro h2");
const introText = document.querySelector(".intro p");
const picTwo = document.querySelector(".content-section img");
const picThree = document.querySelector(".inverse-content img");
const picFour = document.querySelector(".content-destination img");
const funSignUp = document
  .querySelectorAll(".destination")[0]
  .querySelector(".btn");
const mountainSignUp = document
  .querySelectorAll(".destination")[1]
  .querySelector(".btn");
const islandSignUp = document
  .querySelectorAll(".destination")[2]
  .querySelector(".btn");

const body = document.querySelector("body");
const allImages = document.querySelectorAll("img");
const picOneSrc = picOne.src;
const picTwoSrc = picTwo.src;
const picThreeSrc = picThree.src;
const picFourSrc = picFour.src;

// Adding attributes to images
picOne.setAttribute("data-src", picOneSrc);
picTwo.setAttribute("data-src", picTwoSrc);
picThree.setAttribute("data-src", picThreeSrc);
picFour.setAttribute("data-src", picFourSrc);

// functions
const randNumber = function (min, max) {
  return Math.floor(Math.random() * max - min) + min + 1;
};
const randColor = function () {
  return `rgb(${randNumber(1, 256)}, ${randNumber(1, 256)}, ${randNumber(
    1,
    256
  )})`;
};

// event listeners
headerTitle.addEventListener("mouseover", function (e) {
  headerTitle.style.color = randColor();
  headerTitle.style.textAlign = "center";
});

headerTitle.addEventListener("mouseout", function (e) {
  headerTitle.style.color = "black";
});

let leftMarg = 0;
document.addEventListener("keydown", function (e) {
  nav.style.display = "inline";
  if (e.key === "ArrowRight") {
    leftMarg = leftMarg + 100;
    nav.style.marginLeft = `${leftMarg}px`;
  } else if (e.key === "ArrowLeft") {
    leftMarg = leftMarg - 100;
    nav.style.marginLeft = `${leftMarg}px`;
  }
});
let scale = 1;
picOne.addEventListener("wheel", function (e) {
  const scaleAdjustment = 0.05 * e.deltaY;
  if (scale + scaleAdjustment <= 1 && scale + scaleAdjustment > 0) {
    scale = scale + scaleAdjustment;
  }
  picOne.style.transform = `scale(${scale})`;
});

window.addEventListener("load", function () {
  const loadMessage = document.createElement("p");
  loadMessage.textContent = "This Page is Fully Loaded.";
  loadMessage.style.margin = "0";
  loadMessage.style.fontSize = "12px";
  body.prepend(loadMessage);
});

let opacityPicTwo = 1;
document.addEventListener("keyup", function (e) {
  if (e.key === "r") {
    opacityPicTwo = 1;
    picTwo.style.opacity = opacityPicTwo;
  } else {
    opacityPicTwo -= 0.1;
    picTwo.style.opacity = opacityPicTwo;
  }
});

window.addEventListener("resize", function () {
  body.style.backgroundColor = randColor();
});

document.addEventListener("scroll", function () {
  document.querySelector("*").style.textAlign = "center";
});

allImages.forEach((cur) =>
  cur.addEventListener("dblclick", function () {
    cur.src =
      "https://resizing.flixster.com/gFjkV0hWWFFhN2qrf_P_j-1-KSQ=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/258/258_v9_bb.jpg";
  })
);

allImages.forEach((cur) =>
  cur.addEventListener("drag", function (e) {
    cur.src = cur.dataset.src;
  })
);

nav.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
});
