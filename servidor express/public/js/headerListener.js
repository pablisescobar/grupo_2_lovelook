window.addEventListener("load", () => {
    document.getElementById("categoriasDesplegable").addEventListener("mouseover", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'flex' //elemento a mostrar
    });

    document.getElementById("categoriasDesplegable").addEventListener("mouseout", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'none' //elemento a ocultar
    });
    document.getElementById("categorias_dii").addEventListener("click", event => {
        console.log(event)
        let categoriasDesplegable = document.getElementById("category_m")
        if(categoriasDesplegable.style.display == 'none'){
            categoriasDesplegable.style.display = 'block'
        }else{
            categoriasDesplegable.style.display = 'none'
        }

    });

   
})
