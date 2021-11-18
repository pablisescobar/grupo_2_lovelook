
function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

function transform(element){
  element.style.transform="scale(1.2)"
  element.style.zIndex= "800"
  element.style.transition="0.5s transform ease"
  element.style.border="5px solid pink"
  
}

function destransform(element){
  element.style.transform="scale(1)"
  element.style.zIndex= "1"
  element.style.transition="0.5s transform ease"
  element.style.border="none"
}


let subtitle1 = document.getElementById('ItemSubtitle1')
let subtitle2 = document.getElementById('ItemSubtitle2')
let subtitle3 = document.getElementById('ItemSubtitle3')
let info = document.getElementsByClassName('contain-hidden')
let closeItems = document.getElementById('closes')

function capitalize(text) {// funcion creada para colocarle una mayuscula en la primer letra 
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

let imgGuie = document.getElementById('img-guie')
closeItems.onclick = function(){
  info[0].classList.remove('active')
  info[1].classList.remove('active')
  info[2].classList.remove('active')
  closeItems.style.display="none"
  subtitle1.style.color = "black"
  subtitle2.style.color = "black"
  subtitle3.style.color = "black"
  imgGuie.classList.remove('img-guie')
}

let linkGuie = document.getElementById('link-guie-task')
linkGuie.onclick=function(){
  imgGuie.classList.toggle('img-guie')
  closeItems.style.display="block"
}
