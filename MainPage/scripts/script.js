"use strict";
//////////////////////////////////////////////// nav
const navBtn = document.querySelector(".nav");
const navIcon = document.querySelector(".nav__button");
const navMenu = document.querySelector(".menu");
const navItem = document.querySelectorAll(".menu__list-item");

const navIconBefore = window.getComputedStyle(navIcon, "::before");
const navIconAfter = window.getComputedStyle(navIcon, "::after");

navBtn.addEventListener("click", (event) => {
  // navMenu.classList.toggle("hidden");

  navIcon.classList.toggle("nav__button-clicked");

  navMenu.classList.toggle("translateX");
});

navItem.forEach((btn) => {
  btn.addEventListener("click", (Event) => {
    navMenu.classList.toggle("translateX");
    navIcon.classList.toggle("nav__button-clicked");
  });
});
////////////////////////////////////////////////////////////// story
const strBox1 = document.querySelector(".story__box-1");
const strBox2 = document.querySelector(".story__box-2");
const strBox3 = document.querySelector(".story__box-3");
const strBox4 = document.querySelector(".story__box-4");

const strBtnLeft = document.querySelectorAll(".story__box-arrow-left");
const strBtnRight = document.querySelectorAll(".story__box-arrow-right");
const dots = document.querySelectorAll(".dot");
let currentDotIndex = 0;
let currentBoxIndex = 1;

strBtnLeft.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    dots[currentDotIndex].classList.remove("fill");
    currentDotIndex = (currentDotIndex - 1 + dots.length) % dots.length;
    dots[currentDotIndex].classList.add("fill");

    currentBoxIndex -= 1;
    if (currentBoxIndex < 1) {
      currentBoxIndex = 4;
    }
    showCurrentBox();
    console.log(currentBoxIndex);
  });
});

strBtnRight.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    dots[currentDotIndex].classList.remove("fill");
    currentDotIndex = (currentDotIndex + 1) % dots.length;
    dots[currentDotIndex].classList.add("fill");

    currentBoxIndex += 1;
    if (currentBoxIndex > 4) {
      currentBoxIndex = 1;
    }
    showCurrentBox();
  });
});

function showCurrentBox() {
  strBox1.classList.add("hidden");
  strBox2.classList.add("hidden");
  strBox3.classList.add("hidden");
  strBox4.classList.add("hidden");
  if (currentBoxIndex === 1) {
    strBox1.classList.remove("hidden");
  } else if (currentBoxIndex === 2) {
    strBox2.classList.remove("hidden");
  } else if (currentBoxIndex === 3) {
    strBox3.classList.remove("hidden");
  } else if (currentBoxIndex === 4) {
    strBox4.classList.remove("hidden");
  }
}

showCurrentBox();
