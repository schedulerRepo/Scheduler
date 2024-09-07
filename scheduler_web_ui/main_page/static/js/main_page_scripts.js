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

// make when pressing the hyperlink to smoothly go to the section
// also to make the section appear in the middle of the page
function scrollToSection(event, sectionId) {
  event.preventDefault(); // Prevent the default anchor behavior
  const section = document.getElementById(sectionId);

  // Use scrollIntoView with the option to align it in the center
  if (section) {

    if(sectionId==="concept"){
      section.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
      });
    }else{
      section.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "center", // Align the section in the middle of the page
      });
    }
  } 

  // also close the drop down menu
  const DropMenu = document.getElementById("dropdown-menu");
  DropMenu.classList.remove("active");
}

// apply this function on every hyperlink
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(event) {
    const sectionId = this.getAttribute("href").substring(1); // Get the ID without the #
    scrollToSection(event, sectionId);
  });
});

const hoverAreas = document.querySelectorAll(".hover-area");
const nameDisplay = document.getElementById("name-display");

hoverAreas.forEach((area) => {
  area.addEventListener("click", () => {
    const personName = area.getAttribute("data-name");
    
    if (area.textContent === "") {
      area.textContent = personName;
      area.classList.add("active");
    } else {
      area.textContent = "";
      area.classList.remove("active");
    }
  });
});
