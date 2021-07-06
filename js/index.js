"use strict";
// Select DOM Elements
const headerTitle = document.querySelector(".logo-heading");
const nav = document.querySelector(".nav");
const picOne = document.querySelector(".intro img");
const introTitle = document.querySelector(".intro h2");
const introText = document.querySelector(".intro p");
const picTwo = document.querySelector(".content-section img");
const picThree = document.querySelector(".inverse-content img");
const funSignUp = document
  .querySelectorAll(".destination")[0]
  .querySelector(".btn");
const mountainSignUp = document
  .querySelectorAll(".destination")[1]
  .querySelector(".btn");
const islandSignUp = document
  .querySelectorAll(".destination")[2]
  .querySelector(".btn");

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
