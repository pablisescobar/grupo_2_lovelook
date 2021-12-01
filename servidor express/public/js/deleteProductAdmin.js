if (location.pathname == "/admin/products") {
    let formAdminProduct = document.querySelector('#formDelete');
    let falseButton = document.querySelector('#FalseButton')

    formAdminProduct.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event.target);
        
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "swal-confirm",
              cancelButton: "swal-cancel",
            },
            buttonsStyling: false,
          });
    
          swalWithBootstrapButtons
            .fire({
              title: "¿Estas seguro que deseas eliminar?",
              icon: "question",
              showCancelButton: true,
              confirmButtonText: "Confirmar",
              cancelButtonText: "Cancelar",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) { 
                swalWithBootstrapButtons.fire({
                  title: "El producto se eliminó",
                  icon: "success",
                  timer: 1000,
                  showConfirmButton: false,
                });
                formAdminProduct.submit();
                
              }
    
        }

            )}   
)
}
