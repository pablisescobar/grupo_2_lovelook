let iconMenuMobile = document.getElementById('menu-burger')
let iconBarrBusqueda = document.getElementById('search')
let barraBuscador = document.getElementById('search-mobile-tablet')
let menuMobile = document.getElementById('N1')

function abrirMenu(){
  
    if(menuMobile.style.display === "block"){
        menuMobile.style.display = "none"
    }else{
        menuMobile.style.display = "block"
        barraBuscador.style.display = "none"
    }
}

function abrirBuscador(){
    if(barraBuscador.style.display === "flex"){
        barraBuscador.style.display = "none"
    }else{
        barraBuscador.style.display = "flex"
        menuMobile.style.display = "none"
    }
}


/* menu burger */

function myFunction(x) {
    x.classList.toggle("change");
  }
