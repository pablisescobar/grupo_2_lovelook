/* Selector de imágenes */

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

/* FUENTE: https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp */

/* Contador de cantidad de productos */
let counter = 1
let $count = document.getElementById('count');

function add() {
  if (counter <= 10) {
    counter = counter + 1
    $count.innerHTML = `<p>${counter}</p>`
  }

}

function subtract() {
  if (counter > 0) {
    counter = counter - 1
    $count.innerHTML = `<p>${counter}</p>`
  }
}


/* Funcionalidad de ZOOM IMAGE */

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
    if (y < 0) { y = 0; }
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}


let subtitle1 = document.getElementById('ItemSubtitle1')
let subtitle2 = document.getElementById('ItemSubtitle2')
let subtitle3 = document.getElementById('ItemSubtitle3')
let info = document.getElementsByClassName('contain-hidden')
let closeItems = document.getElementById('closes')

function capitalize(text) { /* funcion creada para colocarle una mayuscula en la primer letra */
  return text.charAt(0).toUpperCase() + text.slice(1);
}

subtitle1.onclick = function () {
  subtitle1.style.color = "var(--bordes)"
  subtitle2.style.color = "black"
  subtitle3.style.color = "black"
  info[0].classList.toggle('active')
  info[1].classList.remove('active')
  info[2].classList.remove('active')
  closeItems.style.display="block"
  if (!info[0].classList.contains('active')) {
    subtitle1.style.color = "black"
  }
}
subtitle2.onclick = function () {
  subtitle2.style.color = "var(--bordes)"
  subtitle1.style.color = "black"
  subtitle3.style.color = "black"
  info[1].classList.toggle('active')
  info[0].classList.remove('active')
  info[2].classList.remove('active')
  closeItems.style.display="block"
  if (!info[1].classList.contains('active')) {
    subtitle2.style.color = "black"
  }
}
subtitle3.onclick = function () {
  subtitle3.style.color = "var(--bordes)"
  subtitle2.style.color = "black"
  subtitle1.style.color = "black"
  info[2].classList.toggle('active')
  info[1].classList.remove('active')
  info[0].classList.remove('active')
  closeItems.style.display="block"
  if (!info[2].classList.contains('active')) {
    subtitle3.style.color = "black"
  }
}


closeItems.onclick = function(){
  info[0].classList.remove('active')
  info[1].classList.remove('active')
  info[2].classList.remove('active')
  closeItems.style.display="none"
  subtitle1.style.color = "black"
  subtitle2.style.color = "black"
  subtitle3.style.color = "black"
}

