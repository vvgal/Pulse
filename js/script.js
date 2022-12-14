// $(document).ready(function(){
//     $('.carousel__wrapper').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     arrows: false
//                 }    
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    mouseDrag: true,
    nav: false,
    responsive: {
        992: {
          controls: false
        }
      }
  });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__link_back');

    // Modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__exit').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    });

    $('.catalog-item__button').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    // Validation
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "????????????????????, ?????????????? ??????",
            minlength: jQuery.validator.format("?????????????? {0} ??????????????!")
          },
          phone: "????????????????????, ?????????????? ?????????? ????????????????",
          email: {
            required: "????????????????????, ?????????????? e-mail",
            email: "?????????????? ???????????????????? e-mail"
          }
        }
      });
    };

    validateForms('.consultation__form');
    validateForms('#consultation .form');
    validateForms('#order .form');

    // Masked input
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // Mailer
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();
        $('form').trigger('reset');
      });
      return false;
    });

    // Scroll page up
    $(window).scroll(function() {
      if ($(this).scrollTop() > 655) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function() {
      let _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top+"px"
      });
      return false;
    });
});