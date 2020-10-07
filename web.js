const hamburger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
