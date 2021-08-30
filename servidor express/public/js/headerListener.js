window.onload = () => {
    document.getElementById("categoriasDesplegable").addEventListener("mouseover", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'flex' //elemento a mostrar
    });

    document.getElementById("categoriasDesplegable").addEventListener("mouseout", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'none' //elemento a ocultar
    });
}
