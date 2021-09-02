let barSearch = document.getElementById('search-mobile')
let searchIco = document.getElementById('search-ico')
/* Menu BURGER  */

/* ABRIMOS EL MENU LATERAL IZQUIERDO Y A LA VEZ CERRAMOS LA BARRA DE BÚSQUEDA */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.opacity = "1";
  barSearch.style.width = "0vw";
  barSearch.style.opacity = "0";
  searchIco.style.color = "black";
  searchIco.style.filter = "drop-shadow(4px 4px 2px red);"
  document.getElementById("nav").style.width="100%"
  document.getElementById("nav").style.height="100vh"
}
/* CERRAMOS EL MENU LATERAL Y AL ABRIR LA BARRA DE BÚSQUEDA TAMBIÉN SE CIERRA */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0";
  barSearch.style.width = "0vw";
  barSearch.style.opacity = "0";
  searchIco.style.color = "black";
  searchIco.style.filter = "drop-shadow(4px 4px 2px red);"
  document.getElementById("nav").style.width="0"
  document.getElementById("nav").style.height="0"
}

/* window.onclick = function (event) {
  if (event.target == document.getElementById("nav")) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0.5";
    document.getElementById("nav").style.width="0"
  document.getElementById("nav").style.height="0"
  }
} */

let nav = document.getElementById("nav")
nav.onclick = function () {
  document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0.5";
    document.getElementById("nav").style.width="0"
    document.getElementById("nav").style.height="0"
  }

/* BAR SEARCH */
searchIco.onclick = function () {
  if (barSearch.style.width == "0vw" & barSearch.style.opacity == "0") {
    barSearch.style.width = "80vw";
    barSearch.style.opacity = "1";
    searchIco.style.color = "var(--bordes)"
    searchIco.style.filter = "drop-shadow(4px 4px 2px gray);"
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0.5";
    document.getElementById("nav").style.width="0"
    document.getElementById("nav").style.height="0"
    document.getElementById("btn-lupa").style.display = "inline-block";
    
  } else {
    barSearch.style.width = "0vw";
    barSearch.style.opacity = "0";
    searchIco.style.color = "black";
    searchIco.style.filter = "drop-shadow(4px 4px 2px red);";
  setTimeout(()=>{
      document.getElementById("btn-lupa").style.display = "none";
    },500)
  }
}
