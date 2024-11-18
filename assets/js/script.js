$(document).ready(function () {
  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Navigation and mobile menu functionality
  $("a.link").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    // Immediate scroll without animation
    $("html, body").scrollTop($(target).offset().top - 100);
    updateActiveLink(target);
    closeMobileMenu();
  });

  $(".click, .clicked").on("click", function () {
    $("header").toggleClass("slide");
    $(".mob-logo, .click, .clicked").toggle();
  });

  // Scroll effect for navigation
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    $(".nav-list").toggleClass("filter", scrollPosition > 0);
    updateActiveLink();
  });

  // Function to update active link
  function updateActiveLink(forcedTarget) {
    var scrollPosition = $(window).scrollTop();
    $("section").each(function () {
      var top = $(this).offset().top - 200,
        bottom = top + $(this).outerHeight(),
        id = $(this).attr("id");
      if (
        forcedTarget === "#" + id ||
        (scrollPosition >= top && scrollPosition <= bottom)
      ) {
        $("a.link").removeClass("active");
        $('a.link[href="#' + id + '"]').addClass("active");
      }
    });
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    $("header").removeClass("slide");
    $(".mob-logo, .click").show();
    $(".clicked").hide();
  }
});

// Function accessible from HTML
function closeMenu() {
  $("header").removeClass("slide");
  $(".mob-logo, .click").show();
  $(".clicked").hide();
}
