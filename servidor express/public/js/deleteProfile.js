function global (element) {
    return document.querySelector(element)
}


window.addEventListener("load", function(){
    let buttonDel = global("#bad-btn-submit")
    let formDel = global("#formDelete")
    
    buttonDel.addEventListener("click", function(){
        let opcion = confirm("¿Estas seguro de querer eliminar tu cuenta?, está accion no se puede revertir")
        
        formDel.addEventListener("submit", function(event){
            event.preventDefault()

            if(opcion === true){
                formDel.submit()
            } 
        })
    })

})