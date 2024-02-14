export function additional() {
    const swiper = new Swiper('.reviews__swiper', {
        
        loop: true,

        pagination: {
          el: '.reviews-pagination',
          type: 'bullets'
        },
      
        navigation: {
          nextEl: '.reviews-button-next',
          prevEl: '.reviews-button-prev',
        },
      });
}
