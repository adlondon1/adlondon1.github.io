
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    center: true,
    mergeFit: true,
    responsive:{
        0:{
            items:1,
        }
      }
  });
  $('.scroll').localScroll()
  $('nav').sticky();
  //help with hamburger menu
  //http://www.internetkultur.at/simple-hamburger-drop-down-menu-with-css-and-jquery/
  $('.menu-button').on('click', function () {
    $('.responsive-menu').slideToggle();
    $('.menu-button span').toggleClass('menu-color')
  });
  $('.li-res').on('click', function () {
    $('.responsive-menu').slideToggle();
    $('.menu-button span').toggleClass('menu-color')
  });
});
