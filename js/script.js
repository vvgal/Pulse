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
