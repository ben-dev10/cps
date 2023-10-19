let closeButton = document.getElementById("close-btn");
let openButton = document.getElementById("open-btn");

closeButton.addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "0";
});
openButton.addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "80vw";
});
