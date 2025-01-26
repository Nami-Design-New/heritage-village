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
