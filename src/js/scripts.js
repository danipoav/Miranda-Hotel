// BURGER MENU
const mobileMenu = document.querySelector(".nav__menu");
const mobileMenuBurger = document.querySelector("#mobileMenuBurguer");

const handleClick = () => {
  if (mobileMenu.classList.contains("nav__menu--closed")) {
    mobileMenu.classList.remove("nav__menu--closed");
    mobileMenu.classList.add("nav__menu");
    mobileMenuBurger.src = "src/assets/icons/menu.svg";
  } else {
    mobileMenu.classList.add("nav__menu--closed");
    mobileMenuBurger.src = "src/assets/icons/cross.szvg";
  }
};

mobileMenuBurger.addEventListener("click", handleClick);

const hideNavBar = () => {
  let desktop= window.matchMedia('(min-width: 1000px)')

    if(desktop){
        if(window.scrollY>200){
            document.getElementsByClassName("nav")[0].classList.add("transition-top")
        }else{
            document.getElementsByClassName("nav")[0].classList.remove("transition-top")
        }
    }
}

window.addEventListener('scroll', hideNavBar);


const swiper = new Swiper(".swiper", {
  effect: "slide",
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


const swiperFeatures = new Swiper(".swiperFeatures", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiperFeatures-pagination",
    type: "bullets",
  },
});


const swiperMenu = new Swiper(".swiperMenu", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiperMenu-button-next",
    prevEl: ".swiperMenu-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});


const swiperMenuImages = new Swiper(".swiperMenuImages", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiperMenuImages-pagination",
    type: "bullets",
  },
});


const swiperRoomsList = new Swiper(".swiperRoomsList", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  pagination: {
    el: ".swiperRoomsList-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
