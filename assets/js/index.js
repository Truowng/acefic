const menuBtn = document.querySelector("#header .menu-btn");
const menu = document.querySelector("#header .nav-wrapper");

menuBtn.addEventListener("mouseover", () => {
  menu.classList.add("active");
});

menu.addEventListener("mouseleave", () => {
  menu.classList.remove("active");
});

const homeBanner = new Swiper("#home-banner .swiper", {
  direction: "horizontal",
  speed: 1000,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
});

const homeBlog = new Swiper(".blog .swiper", {
  direction: "horizontal",
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  },
});

const homeAdvantage = new Swiper(".advantage .advantage-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  effect: "coverflow",
  navigation: {
    nextEl: ".advantage .slider-control .slider-button-next",
    prevEl: ".advantage .slider-control .slider-button-prev",
  },
});

const homeFullPage = new fullpage("#homeFullPage", {});
