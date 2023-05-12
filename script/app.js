
$(document).ready(function(){
  $('.customer-list').slick({
    slidesToShow: 3,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='https://laslesvpn-landing.netlify.app/images/arrow-left.svg'/></button>",
    nextArrow:`<button type='button' class='slick-next pull-right'><i class="far fa-arrow-right"></i></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});