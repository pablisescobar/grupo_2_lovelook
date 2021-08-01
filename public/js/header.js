let subcategoryMenu = document.getElementById('subMenu');

let searchBar = document.getElementById('search')

/* barra de buscador mobile */

function dropSearch() {
    let subcategoryMenu = document.querySelector(".list-menu-burger");
    if (searchBar.style.display === "flex") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "flex";
        subcategoryMenu.classList.remove("active")
    }
}


function dropMenu() {
    let searchBar = document.querySelector(".list-menu-burger");
    if (navBar.style.display === "flex") {
        navBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    } else {
        navBar.style.display = "flex";
        searchBar.style.display = "none";
        subcategoryMenu ? subcategoryMenu.classList.remove("active") : ""
    }
}