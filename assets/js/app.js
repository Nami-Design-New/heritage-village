$(document).ready(function () {
  $(".preloader").delay(1000).fadeOut(300);

  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 100);
      }
    });
  });

  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
});

// Menu toggle functionality
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const layer = document.querySelector(".layer");

navLinks.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    layer.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
    navLinks.classList.remove("active");
    layer.classList.remove("active");
  }
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  layer.classList.toggle("active");
});
