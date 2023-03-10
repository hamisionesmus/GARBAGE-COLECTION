// navigation buttons selections
const aboutLink = document.getElementById("about-link");
const driverLink = document.getElementById("driver-link");
const requestLink = document.getElementById("request-link");
const ratingLink = document.getElementById("rating");
// modal selections
const aboutModal = document.getElementById("about-modal");
const loginModal = document.getElementById("login-modal");
const requestModal = document.getElementById("request-modal");
const ratingModal = document.getElementById("rating-modal");
// close the modalselection
const closeButtonAbout = document.querySelector(".about-close-button");
const closeButtonDriver = document.querySelector(".driver-close-button");
const closeButtonRequest = document.querySelector(".request-close-button");
const closeButtonRating = document.querySelector(".rating-close-button");

// open the modal when the about button is clicked
aboutLink.addEventListener("click", function () {
  aboutModal.style.display = "block";
});
// open the modal when the driver button is clicked
driverLink.addEventListener("click", function () {
  loginModal.style.display = "block";
});
// open the modal when the request button is clicked
requestLink.addEventListener("click", function () {
  requestModal.style.display = "block";
});
// open the modal when the rating button is clicked
ratingLink.addEventListener("click", function () {
  ratingModal.style.display = "block";
});

// close the modal when the close button is clicked for all modals
closeButtonAbout.addEventListener("click", function () {
  aboutModal.style.display = "none";
});
closeButtonDriver.addEventListener("click", function () {
  loginModal.style.display = "none";
});
closeButtonRequest.addEventListener("click", function () {
  requestModal.style.display = "none";
});
closeButtonRating.addEventListener("click", function () {
  ratingModal.style.display = "none";
});

// close the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  if (
    event.target === loginModal ||
    event.target === requestModal ||
    event.target === aboutModal ||
    event.target === ratingModal
  ) {
    aboutModal.style.display = "none";
    loginModal.style.display = "none";
    requestModal.style.display = "none";
    ratingModal.style.display = "none";
  }
});
