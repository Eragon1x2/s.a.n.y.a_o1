let swiper = new Swiper(".sell_swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  freeMode: true,
  autoplay: 1000,
  pagination: {
    el: ".swiper-paginatio",
  },
});
let swipers = new Swiper(".comment-slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  initialSlide: 1,
  centeredSlides: true,
  autoplay: 1000,
  pagination: {
    el: '.swiper-paginationss',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-nexts',
    prevEl: '.swiper-button-prevs',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
  // And if we need scrollbar
});