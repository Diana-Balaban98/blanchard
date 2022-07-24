 // gallary slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 2,
  loop: true,
  slidersPerColumnFill: 'row',
  // pagination
  pagination: {
  el: '.swiper-pagination',
  type: 'fraction',
  },
  // navigation
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    768:{
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024:{
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      },

    1330:{
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
    }
  }
});

// projects swiper
const projectsSwiper = new Swiper('.projects__swiper', {
  slideClass: ('projects__slide'),
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{

    668: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1600:{
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  }
});
