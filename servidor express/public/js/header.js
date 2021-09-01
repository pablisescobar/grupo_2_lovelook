let barSearch = document.getElementById('search-mobile')
let searchIco = document.getElementById('search-ico')
/* Menu BURGER  */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.opacity = "1";
  barSearch.style.width = "0vw";
  barSearch.style.opacity = "0";
  searchIco.style.color = "black";
  searchIco.style.filter = "drop-shadow(4px 4px 2px red);"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0.5";
  barSearch.style.width = "0vw";
    barSearch.style.opacity = "0";
    searchIco.style.color = "black";
    searchIco.style.filter = "drop-shadow(4px 4px 2px red);"
}


/* BAR SEARCH */
function openBarSearch() {
  if (barSearch.style.width == "0vw" & barSearch.style.opacity == "0") {
    barSearch.style.width = "80vw";
    barSearch.style.opacity = "1";
    searchIco.style.color = "var(--bordes)"
    searchIco.style.filter = "drop-shadow(4px 4px 2px gray);"
    document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0.5";
  } else {
    barSearch.style.width = "0vw";
    barSearch.style.opacity = "0";
    searchIco.style.color = "black";
    searchIco.style.filter = "drop-shadow(4px 4px 2px red);"
  }
}