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
  
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }