let $mode = document.querySelector('#Mode')
gsap.set("#moon, .star", { opacity: 0 });
gsap.set("#sun, #cloud, #moon", { x: 15 });
gsap.set(".star", { x: 35, y: -5 });

let elementsHTML = ['.header','.header .navbar ul li a','.footer .redes-sociales .facebook:hover','.categoriesBox','.categoriesList a','.btnDesp','.footer .redes-sociales .instagram','.container-listProduct .filted','.container-listProduct .section1',".header .carrito a",'.header .search-bar button','.header .user-desktop','.header .menu-user a','.footer','.footer a','.header .iconLupaBar','.header .btn','.footer .footer-sections-desktop .footer-subtitle','.footer .redes-sociales .iconify','body','.slick-slide','.header .search-bar input','.details-products .product .form-1 .subtitle-guie-size a','.details-products .product .form-1 .subtitle','.details-products .add-look-container h2 a','.details-products .product .description .discount','.details-products .price-line-medio','.container-listProduct .section2 .product h3','.container-listProduct .section2 .product p','.container-listProduct .section2 .product a','select#price.dropdown','select#size.dropdown','select#color.dropdown','select#price.dropdown option','select#size.dropdown option','select#color.dropdown option']

function addClass(element) {
    document.querySelectorAll(element).forEach(item => item.classList.add('dark'))
}

function removeClass(element) {
    document.querySelectorAll(element).forEach(item => item.classList.remove('dark'))
}

function moveDay() {
    gsap.to("#sun", .5, { x: -157, opacity: 0, ease: Power1.easeInOut });
    gsap.to("#cloud", .5, { opacity: 0, ease: Power1.easeInOut });
    gsap.to("#moon", .5, { x: -157, rotate: -360, transformOrigin: "center", opacity: 1, ease: Power1.easeInOut });
    gsap.to(".star", .5, { opacity: 1, ease: Power1.easeInOut });
    gsap.to("#night", .5, { background: "#224f6d", borderColor: "#cad4d8", ease: Power1.easeInOut });
}

function moveNight() {
    gsap.to("#sun", .5, { x: 15, opacity: 1, ease: Power1.easeInOut });
    gsap.to("#cloud", .5, { opacity: 1, ease: Power1.easeInOut });
    gsap.to("#moon", .5, { opacity: 0, x: 35, rotate: 360, transformOrigin: "center", ease: Power1.easeInOut });
    gsap.to(".star", .5, { opacity: 0, ease: Power1.easeInOut });
    gsap.to("#night", .5, { background: "#9cd6ef", borderColor: "#65c0e7", ease: Power1.easeInOut });
}
elementsHTML.forEach(element=>{
$("#day").click(function() {
    moveDay()
    $(this).css({ "pointer-events": "none" });
    $("#night").css({ "pointer-events": "all" });
    addClass(element)
});

$("#night").click(function() {
    moveNight()
    $(this).css({ "pointer-events": "none" });
    $("#day").css({ "pointer-events": "all" });
    removeClass(element)
});
})

let contador = 0;
$mode.onclick = function() {
    contador++
    localStorage.setItem("mode", contador)
}

window.onload = function() {
    let localMode = localStorage.getItem("mode")

    /* HEADER */
    elementsHTML.forEach(element=>{
    if (localMode) {
        if (localMode % 2 === 0) {
            removeClass(element)
                /* se activa el modo normal */
            moveNight()
        } else {
            addClass(element)
                /* se activa el modo dark */
            moveDay()
        }

    }
})

}
