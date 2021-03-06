function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
      animatedelay = $(this).attr("data-animatedelay");
      if(animatedelay != false) {
        $(this).css({
          "-webkit-transition-delay" : animatedelay + "s",
          "-moz-transition-delay" : animatedelay + "s",
          "-ms-transition-delay" : animatedelay + "s",
          "-o-transition-delay" : animatedelay + "s",
          "transition-delay" : animatedelay + "s",
        });
      }
    }
  });
}

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

function getCountNums() {
  $('.count').each(function () {
    if( $(this).offset().top < $(document).scrollTop() + $(window).height() ) {
      durationVal = parseInt($(this).attr("data-duration"));
      dataVal = parseInt($(this).attr("data-val"));
      if( parseInt($(this).text()) != dataVal ) {
        $(this).prop('Counter',0).animate({
            Counter: dataVal
        }, {
            duration: durationVal,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      }
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
  $(".scroll_block").mCustomScrollbar();
  getCountNums();
  setTimeout(function() {
    $(".load").fadeOut(500);
  }, 2000);
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  // getCardThumbHeight();
  getImgBoxWrappParams();
  getAnimation();

});

$(document).scroll(function() {
  getCountNums();
  getAnimation();
});

$(document).ready(function() {

  // getCardThumbHeight();
  getImgBoxWrappParams();
  getAnimation();

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
          if(bodyWidth >= 1240) {
            if(parent.hasClass("odd")) {
              insertAfterElem = parent;
            } else {
              insertAfterElem = parent.next(".odd");
            }
          } else {
            insertAfterElem = parent;
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

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });

    $(".close_nav").click(function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // --------------

    if($(".attach-contact-multiple").length > 0) {
      document.querySelector('.attach-contact-multiple').addEventListener("change", (e) => Array.from(e.target.files).forEach(file => addFile(file.name)));
      function addFile(fileName) {
        $("#label_file").text(fileName);
      }
    }

});