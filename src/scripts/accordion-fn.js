// Accordion functionality
const accordion = document.getElementsByClassName("accordion-item");

// console.log(accordionLabel.length)
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
