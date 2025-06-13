// Close Top-bar
$(".top_bar .btn_close").on("click", () => {
  $(".top_bar").hide();
});

// Open & Close popup menu
const openPopup = () => {
  $(".popup_menu").append($(".header_list"));
  $(".header").addClass("menu_open");
  $("body").addClass("no-scroll");
};

const closePopup = () => {
  $(".header_menu").append($(".header_list"));
  $(".header").removeClass("menu_open");
  $("body").removeClass("no-scroll");
};

$(".icon_bars").on("click", openPopup);
$(".popup .icon_close, .dimmed").on("click", closePopup);

$(window).on("resize", () => {
  const width = $(window).width();
  if ($(".header").hasClass("menu_open") && width >= 770) {
    closePopup();
  }
});

const swiperBanner = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  touchReleaseOnEdges: true,
  loop: true,
  centeredSlides: true,
  mousewheel: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperProducts = new Swiper(".product_slides", {
  slidesPerView: "auto",
  spaceBetween: 16,
  touchReleaseOnEdges: true,
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: false,
});