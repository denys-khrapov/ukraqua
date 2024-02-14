export function additional() {
    // const swiper = new Swiper('.reviews__swiper', {
        
    //     loop: true,

    //     pagination: {
    //       el: '.reviews-pagination',
    //       type: 'bullets'
    //     },
      
    //     navigation: {
    //       nextEl: '.reviews-button-next',
    //       prevEl: '.reviews-button-prev',
    //     },
    //   });




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
    
      
      
}
