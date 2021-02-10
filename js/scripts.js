function getCardThumbHeight() {
  $(".card_thumb").each(function() {
    cardHeight = $(this).width();
    $(this).css({
      "height" : cardHeight + "px"
    });
  });
}

function getImgBoxWrappParams() {
  $(".testimonials_card").each(function() {
    imgBoxWrapp = $(this).find(".img_box_wrapp");
      imgBoxWrapp.css({
        "height" : imgBoxWrapp.width() + "px"
      });
  }); 
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {

  $(".scroll_block").mCustomScrollbar();

});

$(window).resize(function() {

  // getCardThumbHeight();
  getImgBoxWrappParams();

});

$(document).scroll(function() {

});

$(document).ready(function() {

  // getCardThumbHeight();
  getImgBoxWrappParams();

    // if( $(".portfolio_slider").length > 0 ) {
    //     $(".portfolio_slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 1200,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 900,
    //               settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //               }
    //             },
    //             {
    //               breakpoint: 540,
    //               settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //               }
    //             }
    //           ]
    //     });
    // }

});