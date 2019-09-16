/* -------------------------------------
    custom.js: Main JS File
    Author: Mohammed-Yassin HAMDAOUI
   ------------------------------------- */

$(function() {
  /* 
     - Trigger smooth scroll plugin
    */

  var scroll = new SmoothScroll('a[href*="#"]');

  /*
     - Fixed Top Menu
    */

  $(window).on("scroll", function(e) {
    var ww = $(window).scrollTop();
    if (ww > 0) {
      $(".menu").addClass("sticky-menu");
      //$('.mobile-menu').addClass('mobile-menu--active');
    } else {
      $(".menu").removeClass("sticky-menu");
      //$('.mobile-menu').removeClass('mobile-menu--active');
    }
  });

  /*
     - Menu Icon Click Event Handler
    */

  $(".menu-icon").on("click", function() {
    $(".menu-mobile").slideToggle();
    $(this)
      .children(".menu-bar")
      .toggleClass("animate-menu-bar");
  });

  /*
     - Portfolio Hover effect
    */

  // $(".devwork").filter(function(i) {
  //     if(i >= 4) {
  //         return true;
  //     }
  // }).hide();

  $(".show-more").on("click", function() {
    $(".devwork")
      .filter(function(i) {
        if (i >= 4) {
          return true;
        }
      })
      .show();
    $(this).hide();
  });

  /* POPUP Work */
  $(".devwork").on("click", function() {
    var className = $(this).data("popup");
    $(".work-popup." + className).fadeIn(400);
  });

  $(".popup-close").on("click", function() {
    $(".work-popup").fadeOut();
  });

  $(".work-popup").on("click", function(e) {
    if (!e.target.closest(".work-container")) {
      $(".work-popup").fadeOut();
    }
  });

  /* Trigger AOS */
  AOS.init({ duration: 1000 });

  /* Loading Animation */
  $(window).on("load", function() {
    $(".preloader").fadeOut(1000);
  });

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "js/particles.js", function() {
    console.log("callback - particles.js config loaded");
  });

  /* POST INSTA API */
  $.get(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=2202752019.e5a95a6.5f381ec11eac41cea7ff6e7aa80f587f"
  ).done(function(data) {
    $(".instagram").fadeIn();
    var i = 0;
    data.data.forEach(function(e) {
      if (i < $(".insta-photo").length) {
        $(".insta-photo")
          .children("a")
          .children("img")
          .eq(i)
          .attr("src", e.images.standard_resolution.url);
        $(".insta-photo")
          .children("a")
          .eq(i++)
          .attr("href", e.link);
      }
    });
  });
});
