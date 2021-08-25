let barraBuscador = document.getElementById('search-mobile-tablet')

function abrirBuscador(){
    if(barraBuscador.style.display === "flex"){
        barraBuscador.style.display = "none"
    }else{
        barraBuscador.style.display = "flex"
        menuMobile.style.display = "none"
    }
}

/* menu burger y lupa*/

function myFunction(x) {
    x.classList.toggle("change");
  }

/* Menu burger 2  */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.opacity = "1";  
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0.5";
  }

  function openBarSearch(){
    let barSearch = document.getElementById('search-mobile')
    let searchIco = document.getElementById('search-ico')
    if(barSearch.style.width == "0vw" & barSearch.style.opacity =="0"){
      barSearch.style.width = "80vw";
      barSearch.style.opacity = "1";
      searchIco.style.color = "var(--bordes)"
    }else{
      barSearch.style.width = "0vw";
       barSearch.style.opacity ="0";
       searchIco.style.color = "black"
    }
  }