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
      if ($(this).closest('.header').length) {
        var isAlreadyOpen = $(this).hasClass('active');
        $('.header .accordion-header').not(this).removeClass('active').next('.accordion-content').slideUp();
        if (!isAlreadyOpen) {
          $(this).addClass('active').next('.accordion-content').slideDown();
        } else {
          $(this).removeClass('active').next('.accordion-content').slideUp();
        }
      } else {
        var content = $(this).next('.accordion-content');
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          content.slideUp();
        } else {
          $('.accordion-header.active').not(this).removeClass('active');
          $('.accordion-content').not(content).slideUp();
          $(this).addClass('active');
          content.slideDown();
        }
      }
    });
  });

  // FOOTER SECTION список телефонов
  $(document).ready(function () {
    $('.click__address').click(function () {
      $('.click__address-container').toggleClass('expanded');
    });
  });


  $(document).ready(function() {
    // Показываем popup после загрузки страницы
    $('#popup').fadeIn();

    // Закрываем popup при клике на кнопку или вне popup
    $('.popup__btn, #popup').click(function(e) {
        // Проверяем, был ли клик на кнопке
        if ($(e.target).hasClass('popup__btn')) {
            // Закрываем popup при клике на кнопку
            closePopup();
        } else if ($(e.target).attr('id') === 'popup') {
            // Закрываем popup при клике вне окна
            closePopup();
        }
    });

    // Функция для закрытия popup
    function closePopup() {
        $('#popup').css('right', '-100%');
        $('body').removeClass('popup-open');
    }

    // Открываем popup с анимацией
    setTimeout(function() {
        $('#popup').css('right', '0');
        $('body').addClass('popup-open');
    }, 2000); // Задержка для плавного выезда
});

}
