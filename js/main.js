const mobileMenu = document.querySelector(".menu");
const navList = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const toggleButton = document.querySelector(".dark");
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save mode preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
