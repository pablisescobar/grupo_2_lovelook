

let addCart = document.querySelectorAll('.agregar-carrito')[0]
console.dir(addCart);

addCart.forEach((element)=>{
    element.onclick = function (event) {
        event.preventDefault()
        alert(event)
    }
})     

    
   
