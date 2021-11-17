function global(element) {
  return document.getElementById(element)
}

window.addEventListener('load', () => {
  let name = global('nombre'),
    errorNombre = global('errorNombre'),
    apellido = global('apellido'),
    last_name = global('errorApellido'),
    correo = global('email'),
    email = global('errorEmail'),
    telefono = global('telefono'),
    phone = global('errorTelefono'),
    direccion = global('direccion'),
    address = global('errorDireccion'),
    pc = global('cp'),
    codepostal = global('errorCp'),
    imagen = global('examinar'),
    image = global('errorImage'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]{4,}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
    regExImage = /\.(gif|jpg|jpeg|tiff|png)$/i,
    regExAlphaNum = /^([a-zA-Z0-9_-]){1,16}$/

  name.addEventListener('blur', function () {
    switch (true) {
      case !name.value.trim():
        errorNombre.innerHTML = 'El campo nombre es obligatorio'
        name.style.boxShadow = '0 0 10px red'
        break
      case !regExAlpha.test(name.value):
        errorNombre.innerHTML = 'Debes ingresar un nombre válido'
        name.style.boxShadow = '0 0 10px red'
        break
      default:
        name.style.boxShadow = '0 0 10px green'
        errorNombre.innerHTML = ''
        break
    }
  })
  last_name.addEventListener('blur', function () {
    switch (true) {
      case !apellido.value.trim():
        errorApellido.innerHTML = 'El campo apellido es obligatorio'
        apellido.style.boxShadow = '0 0 10px red'
        break
      case !regExAlpha.test(Inputname.value):
        errorApellido.innerHTML = 'Debes ingresar un apellido'
        last_name.style.boxShadow = '0 0 10px red'
        break
      default:
        last_name.style.boxShadow = '0 0 10px green'
        errorApellido.innerHTML = ''
        break
    }
  })
  correo.addEventListener('blur', function () {
    switch (true) {
      case !correo.value.trim():
        email.innerHTML = 'El campo email es obligatorio'
        correo.style.boxShadow = '0 0 10px red'
        break
      case !regExEmail.test(correo.value):
        email.innerHTML = 'Debes ingresar un email válido'
        correo.style.boxShadow = '0 0 10px red'
        break
      default:
        correo.style.boxShadow = '0 0 10px green'
        email.innerHTML = ''
        break
    }
  })
  phone.addEventListener("blur", function () {
    switch (true) {
      case !phone.value.trim():
        errorTelefono.innerHTML = "El campo telefono es obligatorio";
        phone.style.boxShadow = '0 0 10px red';
        break;
      case !regExTel.test(phone.value):
        errorTelefono.innerHTML = "Debes ingresar un telefono válido";
        phone.style.boxShadow = '0 0 10px red';
        break;
      default:
          phone.style.boxShadow = '0 0 10px green';
          errorTelefono.innerHTML = "";
        break;
    }
  })
  address.addEventListener("blur", function () {
    switch (true) {
      case !address.value.trim():
        errorDireccion.innerHTML = "El campo dirección es obligatorio";
        address.style.boxShadow = '0 0 10px red';
        break;
      case !regExAlphaNum.test(address.value):
        errorDireccion.innerHTML = "Debes ingresar una dirección válida";
        address.style.boxShadow = '0 0 10px red';
        break;
      default:
          address.style.boxShadow = '0 0 10px green';
          errorDireccion.innerHTML = "";
        break;
    }
  })
  
})
