

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a navigation link.
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Display the current year in the footer.
document.getElementById("year").textContent =
  new Date().getFullYear();
