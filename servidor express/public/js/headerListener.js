let categoriasDesplegable = document.querySelector("#categoriasDesplegableDesktop")
let $categoriesBox = document.querySelector('#CBox')


categoriasDesplegable.addEventListener('click',function(){
    $categoriesBox.classList.toggle('active')
    categoriasDesplegable.classList.toggle('active')
    
});
