var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1",
    loop:true,
    spaceBetween: 30,
    breakpoints : {
        771: {
            slidesPerView: "2",
            spaceBetween: 30, 
        },
        991: {
            slidesPerView: "3",
    spaceBetween: 30,
        }
    },
    autoplay: {
        delay:2500,
        disableOnInteraction :false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   
  });
  //
  