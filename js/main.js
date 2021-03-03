$ (function () {
  $slick_slider = $('.ideas__album');
  settings = {
  dots: true,
  arrows: false,
  nextArrow: '<div class="my-nextArrow"><img src="./img/icon-next-vector.svg" alt=""></div>',
  prevArrow: '<div class="my-prevArrow"><img src="./img/icon-prev-vector.svg" alt=""></div>',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  mobileFirst: true,
  adaptiveHeight: true,

  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        centerPadding: '30px',
      }
    },
    {
      breakpoint: 1300,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerPadding: '40px',
      }
    },
  ]
}
$slick_slider.slick(settings);

$(window).on('resize', function() {
  if ($(window).width() < 300) {
    if ($slick_slider.hasClass('slick-initialized')) {
      $slick_slider.slick('unslick');
    }
    return
  }

  if (!$slick_slider.hasClass('slick-initialized')) {
    return $slick_slider.slick(settings);
  }
});

  $('#burger-button').on('click', function() {
    $('.nav').toggleClass('nav--burger');
    $('.burger__button-item').toggleClass('active');
  });

  $("#lightgallery").lightGallery({
    download: false,
    counter: false,
  }); 
});    