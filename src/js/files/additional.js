export function additional() {
  reviewsSwiper()


  function reviewsSwiper() {
    let swiperReviews = new Swiper('.reviews__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: false,
      speed: 600,
      navigation: {
        nextEl: '.reviews__navigation .reviews-button-next',
        prevEl: '.reviews__navigation .reviews-button-prev'
      },
      pagination: {
        el: '.reviews__navigation .reviews-pagination',
        clickable: true
      }
    })
  }



  // SEO SECTION раскрытие блока
  var container = document.getElementById("seo__container");
  var button = document.getElementById("seo__btn");

  button.addEventListener("click", function () {
    if (container.style.maxHeight) {
      container.style.maxHeight = null;
      button.innerHTML = "Розгорнути текст";
      button.classList.add("collapsed");
    } else {
      container.style.maxHeight = container.scrollHeight + "px";
      button.innerHTML = "Згорнути текст";
      button.classList.remove("collapsed");
    }
  });

  // FOOTER SECTION акардион локации
  $(document).ready(function () {
    $('.accordion-header').click(function () {
      $(this).next('.accordion-content').slideToggle();
      $(this).toggleClass('active');
      $('.accordion-header').not(this).removeClass('active');
    });
  });

  // FOOTER SECTION список телефонов
  $(document).ready(function () {
    $('.click__address').click(function () {
      $('.click__address-container').toggleClass('expanded');
    });
  });
}
