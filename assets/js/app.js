$(document).ready(function () {
  $(".preloader").delay(1000).fadeOut(300);

  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 50);
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


const servicesSlider = new Swiper(".gallery_swiper", {
  spaceBetween: 12,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".service-button-next",
    prevEl: ".service-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
// blog details
function updateMainGallery(sidebarId, mainImageId, mainCaptionId) {
  const sidebar = document.getElementById(sidebarId);
  const mainImage = document.getElementById(mainImageId);
  const mainCaption = document.getElementById(mainCaptionId);

  // Set the default active item
  const defaultActiveItem = sidebar.querySelector('ul li.active');
  if (defaultActiveItem) {
      const imageSrc = defaultActiveItem.querySelector('img').src;
      const captionText = defaultActiveItem.querySelector('span').innerText;
      mainImage.src = imageSrc;
      mainCaption.innerText = captionText;
  }

  // Add click event listeners to all items
  sidebar.querySelectorAll('ul li').forEach(item => {
      item.addEventListener('click', () => {
          // Remove active class from all items
          sidebar.querySelectorAll('ul li').forEach(li => li.classList.remove('active'));
          // Add active class to the clicked item
          item.classList.add('active');
          // Update the main image and caption
          const imageSrc = item.querySelector('img').src;
          const captionText = item.querySelector('span').innerText;
          mainImage.src = imageSrc;
          mainCaption.innerText = captionText;
      });
  });
}

updateMainGallery('sidebar-most-viewed', 'main-image-most-viewed', 'main-caption-most-viewed');
updateMainGallery('sidebar-featured', 'main-image-featured', 'main-caption-featured');