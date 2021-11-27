let desplegar = document.getElementsByClassName('categoryPc')

    document.getElementById("categoriasDesplegable").addEventListener("mouseout", event => {
        document.getElementById("categoriasDesplegableView").style.display = 'none' //elemento a ocultar
    });
    document.getElementById("categorias_dii").addEventListener("click", event => {
     /*    console.log(event) */
        let categoriasDesplegable = document.getElementById("category_m")
        if(categoriasDesplegable.style.display == 'none'){
            categoriasDesplegable.style.display = 'block'
        }else{
            categoriasDesplegable.style.display = 'none'
           
        }})

desplegar.addEventListener('click',function(){
    caja.classList.toggle('active')
    desplegar.classList.toggle('active')
})