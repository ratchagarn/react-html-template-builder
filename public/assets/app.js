(function($) {
  $('#clickMe').on('click', function() {
    $('#moveBox').toggleClass('move')
  })

  $('#testOwlCarousel > .owl-carousel').owlCarousel({
    margin: 16,
    loop: false,
    center: true,
    nav: true,
  })
})(window.jQuery)
