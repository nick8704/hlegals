const swiper = new Swiper('.logo-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.logo-slider-pagination',
    },
  });