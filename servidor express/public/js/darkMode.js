let $mode = document.querySelector("#Mode");
gsap.set("#moon, .star", { opacity: 0 });
gsap.set("#sun, #cloud, #moon", { x: 15 });
gsap.set(".star", { x: 35, y: -5 });

let elementsHTML = [
  /* header */
  ".header",
  ".header .carrito a",
  ".header .search-bar button",
  ".header .user-desktop",
  ".header .menu-user a",
  ".header .navbar ul li a",
  ".header .iconLupaBar",
  ".header .btn",
  ".header .search-bar input",

  /* footer */
  ".footer .help ul",
  ".footer .contact ul",
  ".footer .about ul",
  ".footer .redes-sociales .facebook:hover",
  ".footer .redes-sociales .instagram",
  ".footer",
  ".footer a",
  ".footer .footer-sections-desktop .footer-subtitle",
  ".footer .redes-sociales .iconify",

  /* detail product */
  ".details-products .product .form-1 .subtitle-guie-size a",
  ".details-products .product .form-1 .subtitle",
  ".details-products .add-look-container h2 a",
  ".details-products .product .description .discount",
  ".details-products .price-line-medio",

  /* list products */
  ".container-listProduct .section2 .product .discount",
  ".container-listProduct .section2 .product h3",
  ".container-listProduct .section2 .product p",
  ".container-listProduct .section2 .product a",

  /* other */
  "body",
  ".sectionWe",
  ".sectionWe a",
  ".nav-bar select",
  ".container-listProduct .section2 .product h3",
  ".categoriesBox",
  ".categoriesList a",
  ".btnDesp",
  ".container-listProduct .filted",
  ".container-listProduct .section1",

  ".slick-slide",
  "select#price.dropdown",
  "select#size.dropdown",
  "select#color.dropdown",
  "select#price.dropdown option",
  "select#size.dropdown option",
  "select#color.dropdown option",

  /* contact */
  ".form-contact-container input",
  ".form-contact-container select",
  ".form-contact-container .cv-input",
  ".form-contact-container textarea",

  /* Validations */
  /* error */
  "input.validationsErrors",
  "textarea.validationsErrors",
  "label.validationsErrors",
  "select.validationsErrors",
  /* success */
  "input.validationsSuccess",
  "textarea.validationsSuccess",
  "label.validationsSuccess",
  "select.validationsSuccess",
  ".error",
];

function addClass(element) {
  document
    .querySelectorAll(element)
    .forEach((item) => item.classList.add("dark"));
}

function removeClass(element) {
  document
    .querySelectorAll(element)
    .forEach((item) => item.classList.remove("dark"));
}

function moveDay() {
  gsap.to("#sun", 0.5, { x: -157, opacity: 0, ease: Power1.easeInOut });
  gsap.to("#cloud", 0.5, { opacity: 0, ease: Power1.easeInOut });
  gsap.to("#moon", 0.5, {
    x: -157,
    rotate: -360,
    transformOrigin: "center",
    opacity: 1,
    ease: Power1.easeInOut,
  });
  gsap.to(".star", 0.5, { opacity: 1, ease: Power1.easeInOut });
  gsap.to("#night", 0.5, {
    background: "#224f6d",
    borderColor: "#cad4d8",
    ease: Power1.easeInOut,
  });
}

function moveNight() {
  gsap.to("#sun", 0.5, { x: 15, opacity: 1, ease: Power1.easeInOut });
  gsap.to("#cloud", 0.5, { opacity: 1, ease: Power1.easeInOut });
  gsap.to("#moon", 0.5, {
    opacity: 0,
    x: 35,
    rotate: 360,
    transformOrigin: "center",
    ease: Power1.easeInOut,
  });
  gsap.to(".star", 0.5, { opacity: 0, ease: Power1.easeInOut });
  gsap.to("#night", 0.5, {
    background: "#9cd6ef",
    borderColor: "#65c0e7",
    ease: Power1.easeInOut,
  });
}
elementsHTML.forEach((element) => {
  $("#day").click(function () {
    moveDay();
    $(this).css({ "pointer-events": "none" });
    $("#night").css({ "pointer-events": "all" });
    addClass(element);
  });

  $("#night").click(function () {
    moveNight();
    $(this).css({ "pointer-events": "none" });
    $("#day").css({ "pointer-events": "all" });
    removeClass(element);
  });
});

let localMode = localStorage.getItem("mode");
let contador = 0;
$mode.onclick = function () {
  contador++;
  localStorage.setItem("mode", contador);
};

window.addEventListener("load", function () {
  /* HEADER */

  elementsHTML.forEach((element) => {
    if (localMode) {
      if (localMode % 2 === 0) {
        removeClass(element);
        /* se activa el modo normal */
        moveNight();
      } else {
        addClass(element);
        /* se activa el modo dark */
        moveDay();
      }
    }
  });
});
