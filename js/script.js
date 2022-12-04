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
});