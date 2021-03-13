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

  $(".testimonials_wrapp").each(function() {
    testimonial = $(this).find(".testimonial");
    testimonial.each(function() {
      index = $(this).index(".testimonial");
      if(index % 2 != 0 ) {
        $(this).addClass("odd");
        objectName = $(this).find("[data-testimonial-link]").attr('data-testimonial-link');
        $("[data-testimonial ='"+objectName+"']").addClass("odd");
      }
    });
  });

  $("[data-testimonial-link]").on('click', function(e) {
    e.preventDefault();
    objectName = $(this).attr('data-testimonial-link');
    testimonialBox = $("[data-testimonial = '"+objectName+"']");
    parent = $(this).closest(".testimonial");
    if(!$(this).hasClass("hide")) {
      $(".testimonial_content").slideUp(300);
      $(".testimonial").removeClass("active");
      setTimeout(function() {
        $(".testimonial_content").appendTo(".testimonials_texts");              
      }, 400);
      setTimeout(function() {
        if(!parent.hasClass("active")) {
          parent.addClass("active");
          if(parent.hasClass("odd")) {
            insertAfterElem = parent;
          } else {
            insertAfterElem = parent.next(".odd");
          }
          $(testimonialBox).insertAfter(insertAfterElem);
          $(testimonialBox).slideDown(300);
        }
      }, 500);
    } else {
      parent.removeClass("active");
      testimonialBox.slideUp(300);
      setTimeout(function() {
        testimonialBox.appendTo(".testimonials_texts");              
      }, 400);
    }
  });

  $(".testimonial_content .tes_burger").on('click', function(e) {
    e.preventDefault();
    parent = $(this).closest(".testimonial_content");
    objectName = parent.attr('data-testimonial');
    testimonialThumb = $("[data-testimonial-link = '"+objectName+"']").closest(".testimonial");
    parent.slideUp(300);
    setTimeout(function() {
      parent.appendTo(".testimonials_texts");
      testimonialThumb.removeClass("active");
    }, 500);
  });

  $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".testimonial_content").each(function() {
          if($(this).is(":visible")) {
            testimonialContent = $(this);
            objectName = $(this).attr('data-testimonial');            
            testimonialThumb = $("[data-testimonial-link = '"+objectName+"']").closest(".testimonial");
            testimonialContent.slideUp(300);
            testimonialThumb.removeClass("active");
          }
        });
        setTimeout(function() {
          $(".testimonial_content").appendTo(".testimonials_texts");              
        }, 500);
      }
  });

    if( $(".project_slider").length > 0 ) {
      $(".project_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
      });
    }

    if( $(".slider_2").length > 0 ) {
      $(".slider_2").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
      });
    }

});