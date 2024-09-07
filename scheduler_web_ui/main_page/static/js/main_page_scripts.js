document
  .getElementById("contact-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const DropMenu = document.getElementById("dropdown-menu");

  // Open the side menu
  hamburger.addEventListener("click", function() {
    DropMenu.classList.toggle("active");
  });


  // Close the menu if clicked outside
  document.addEventListener("click", function(event) {
    if (!DropMenu.contains(event.target) && !hamburger.contains(event.target)) {
      DropMenu.classList.remove("active");
    }
  });
});
