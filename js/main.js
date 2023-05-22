const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const swiper = new Swiper(".swiperMasterHome", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  zoom: {
    maxRatio: 5,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const swiperServices = new Swiper(".swiperMasterServices", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //   },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    2000: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const swiperProducts = new Swiper(".swiperMasterProducts", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //   },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    2000: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// Obtener los elementos de las imágenes y la tarjeta emergente
const images = document.querySelectorAll(".swiper-slide img");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image");

// Agregar el evento de clic a cada imagen
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Obtener la descripción de la imagen clicada

    // Actualizar la imagen y la descripción en la tarjeta emergente
    popupImage.src = image.src;
    popupImage.alt = image.alt;

    // Mostrar la tarjeta emergente
    popup.style.display = "block";
  });
});

// Agregar evento de clic para cerrar la tarjeta emergente
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// Agregar evento de clic para cerrar la tarjeta emergente
popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// viewDetailsBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     const imageSrc = images[index].src;
//     const imageAlt = images[index].alt;

//     const url =
//       "cart.html?src=" +
//       encodeURIComponent(imageSrc) +
//       "&alt=" +
//       encodeURIComponent(imageAlt);

//     window.open(url, "_blank");
//   });
// });

const myButtons = document.querySelectorAll(".btnVermas");
const popupMessage = document.querySelector(".popupMessage");

myButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Alternar la visibilidad del mensaje emergente
    if (popupMessage.style.display === "none") {
      popupMessage.style.display = "block";
    } else {
      popupMessage.style.display = "none";
    }
  });
});

const myButtonsCart = document.querySelectorAll(".btnCarrito");
const popupMessageCart = document.querySelector(".popupMessage");

myButtonsCart.forEach(function (button) {
  button.addEventListener("click", function () {
    // Alternar la visibilidad del mensaje emergente
    if (popupMessageCart.style.display === "none") {
      popupMessageCart.style.display = "block";
    } else {
      popupMessageCart.style.display = "none";
    }
  });
});
