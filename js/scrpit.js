$(document).ready(function () {
  // Button Click Event for the element with id "start-btn"
  $("#start-btn").click(function () {
    alert("Button Clicked!");
  });

  // Initialize AOS animations
  AOS.init({ duration: 1000, once: true });
});
