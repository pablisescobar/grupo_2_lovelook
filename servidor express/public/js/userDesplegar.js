
let desplegarId = document.getElementById('circle_despegable')
let block = document.getElementById('user-desplegable')

desplegarId.addEventListener('click', ()=> {
    if(block.style.top == '-100%'){
        block.style.top = '85px'
    }else {
        block.style.top = '-100%'
    }
})