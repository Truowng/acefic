import { CountUp } from "../js/countUp.min.js";

const counters = document.querySelectorAll(".archive-list .archive-item .num");
const menuBtn = document.querySelector("#header .menu-btn");
const menu = document.querySelector("#header .nav-wrapper");
const closeBtn = document.querySelector("#header .nav-wrapper .close-btn");

menuBtn.addEventListener("mouseover", () => {
  menu.classList.add("active");
});

menu.addEventListener("mouseleave", () => {
  menu.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

if (document.querySelector("#home-banner .swiper")) {
  const homeBanner = new Swiper("#home-banner .swiper", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
  });
}

if (document.querySelector(".blog .swiper")) {
  const homeBlog = new Swiper(".blog .swiper", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".advantage .advantage-slider .swiper")) {
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
}

if (document.querySelector(".project-detail-slider .swiper")) {
  const projectDetail = new Swiper(".project-detail-slider .swiper", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",

    pagination: {
      direction: "vertical",
      el: ".project-detail-content .swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector("#fullpage")) {
  const fullPage = new fullpage("#fullpage", {
    responsiveWidth: 767,
  });
}

if (counters) {
  counters.forEach((counter, index) => {
    const countUp = new CountUp(`num-${index + 1}`, counter.innerHTML, {
      enableScrollSpy: true,
      duration: 3.0,
      useGrouping: false,
      scrollSpyOnce: true,
    });
    countUp.handleScroll();
    let fpView;
    let interval = setInterval(() => {
      fpView = document.querySelector(".fp-viewing-2");
      if (fpView) {
        clearInterval(interval);
        countUp.start();
      }
    }, 50);
  });
}

lightbox.option({
  resizeDuration: 300,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  imageFadeDuration: 300,
});
