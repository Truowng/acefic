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

if (document.querySelector(".home-blog .home-blog-slider .swiper")) {
  const homeBlog = new Swiper(".home-blog .home-blog-slider .swiper", {
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

if (document.querySelector(".blog-relate .swiper")) {
  const blogRelate = new Swiper(".blog-relate .swiper", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".about-history .about-history-slider .swiper")) {
  const aboutHistory = new Swiper(
    ".about-history .about-history-slider .swiper",
    {
      direction: "horizontal",
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 40,
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
      navigation: {
        prevEl: ".about-history-slider .slider-button.prev",
        nextEl: ".about-history-slider .slider-button.next",
      },
    }
  );
}

if (document.querySelector(".about-partner .partner-slider .swiper")) {
  const aboutParter = new Swiper(".about-partner .partner-slider .swiper", {
    direction: "horizontal",
    speed: 1000,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 5,
      },
    },
  });
}

if (
  document.querySelector(".about-executive .about-executive-slider .swiper")
) {
  const executiveSlider = new Swiper(
    ".about-executive .about-executive-slider .swiper",
    {
      direction: "horizontal",
      speed: 1000,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        },
      },
    }
  );
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
      duration: 5.0,
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

// const logo = document.querySelectorAll(
//   ".loading-wrapper .loading-line svg path"
// );
// logo.forEach((path, index) => {
//   console.log(index, path.getTotalLength());
// });

lightbox.option({
  resizeDuration: 300,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  imageFadeDuration: 300,
});
