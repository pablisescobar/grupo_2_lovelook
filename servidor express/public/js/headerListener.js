let desplegar = document.getElementsByClassName('categoryPc')

let caja = document.getElementById('FrameCategory')

desplegar.addEventListener('click',function(){
    caja.classList.toggle('active')
    desplegar.classList.toggle('active')
})