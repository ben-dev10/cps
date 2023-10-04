/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// closing and opening menu functionality

function openMenu() {
  document.getElementById("sidebar").style.width = "80vw";
}

function closeMenu() {
  document.getElementById("sidebar").style.width = "0";
}

// Accordion functionality
const accordion = document.getElementsByClassName("accordion-item");

// console.log(accordionLabel.length)
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
