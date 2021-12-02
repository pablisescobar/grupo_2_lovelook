let categoriasDesplegable = document.querySelector("#categoriasDesplegableDesktop")
let $categoriesBox = document.querySelector('#CBox')


categoriasDesplegable.addEventListener('click',function(){
    $categoriesBox.classList.toggle('active')
    categoriasDesplegable.classList.toggle('active')
    
});

window.onload = () => {
    document.getElementById("categoriasDesplegable").addEventListener("mouseover", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'flex' //elemento a mostrar
    });

    document.getElementById("categoriasDesplegable").addEventListener("mouseout", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'none' //elemento a ocultar
    });
}