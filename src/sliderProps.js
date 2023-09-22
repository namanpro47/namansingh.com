import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const sliderProps = {
  portfolio: {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".next_button",
      prevEl: ".prev_button",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  },
  testimonial: {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    rewind: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".owl-dots",
      type: "bullets",
      clickable: "true",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  },
};
