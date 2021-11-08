function qs(id) {
    return document.querySelector(id)
}
/* Elements form */
var $inputNombre = qs("input#nombreInput"),
    $inputApellido = qs("input#apellidoInput"),
    $inputDni = qs("input#dniInput"),
    $inputEmail = qs("input#emailInput"),
    $inputTel = qs("input#telInput"),
    $inputCv = qs("input#cvInput"),
    $selectLocalidad = qs("select#localidadInput"),
    $inputDomicilio = qs("input#domicilioInput"),
    $selectProvince = qs("select#provinceInput"),
    $inputCuit = qs("input#cuitInput"),
    $inputRSocial = qs("input#RSocialInput"),
    $selectDSocial = qs("select#DSocialSelect"),
    $inputMsg = qs("textarea#msgInput"),
    regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/,
    regExDomicilio = /^[a-zA-Z\sñáéíóúü]+[0-9]{2,5}$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
    regExCUIT = /\b(20|23|24|27|30|33|34)(\D)?[0-9]{7,8}(\D)?[0-9]/,
    regExAlphanumeric = /^[a-z0-9A-Z\sñáéíóúü]*$/

/* Errors span */
$NombreError = qs("span#nombreError"),
    $ApellidoError = qs("span#apellidoError"),
    $DniError = qs("span#dniError"),
    $EmailError = qs("span#emailError"),
    $TelError = qs("span#telError"),
    $CvError = qs("span#cvError"),
    $LocalidadError = qs("span#localidadError"),
    $DomicilioError = qs("span#domicilioError"),
    $ProvinceError = qs("span#provinceError"),
    $CuitError = qs("span#cuitError"),
    $RSocialError = qs("span#RSocialError"),
    $DSocialError = qs("span#DSocialError"),
    $MsgError = qs("span#msgError")

window.addEventListener("load", function () {


    /* ------------ */
    /* Consultas */
    /* ------------ */
    /* NOMBRE */
    $inputNombre.onblur = function () {
        switch (true) {
            case !$inputNombre.value.trim():
                $NombreError.innerText = "Campo obligatorio"
                $inputNombre.classList.remove("validationsSuccess")
                $inputNombre.classList.add("validationsErrors")
                $NombreError.classList.add("validationsErrors")
                break;
            case !regExAlpha.test($inputNombre.value):

                $NombreError.classList.remove("validationsErrors")
                $NombreError.innerText = "El nombre no puede contener numeros"
                $inputNombre.classList.remove("validationsSuccess")
                $inputNombre.classList.add("validationsErrors")
                $NombreError.classList.add("validationsErrors")

                break;
            case $inputNombre.value.length < 5:
                $NombreError.innerText = "El nombre debe ser mayor a 4 caracteres"
                $inputNombre.classList.remove("validationsSuccess")
                $inputNombre.classList.add("validationsErrors")
                $NombreError.classList.add("validationsErrors")


                break;
            default:
                $NombreError.classList.remove("validationsErrors")
                $inputNombre.classList.remove("validationsErrors")
                $inputNombre.classList.add("validationsSuccess")
                $NombreError.innerText = ""


        }
    }

    /* APELLIDO */
    $inputApellido.onblur = function () {
        switch (true) {
            case !$inputApellido.value.trim():
                $ApellidoError.innerText = "Campo obligatorio"
                $inputApellido.classList.remove("validationsSuccess")
                $inputApellido.classList.add("validationsErrors")
                $ApellidoError.classList.add("validationsErrors")

                break;
            case !regExAlpha.test($inputApellido.value):
                $ApellidoError.innerText = "El apellido no puede contener numeros"
                $inputApellido.classList.remove("validationsSuccess")
                $inputApellido.classList.add("validationsErrors")
                $ApellidoError.classList.add("validationsErrors")

                break;
            case $inputApellido.value.length < 5:
                $ApellidoError.innerText = "El apellido debe ser mayor a 4 caracteres"
                $inputApellido.classList.remove("validationsSuccess")
                $inputApellido.classList.add("validationsErrors")
                $ApellidoError.classList.add("validationsErrors")

                break;
            default:
                $ApellidoError.classList.remove("validationsErrors")
                $ApellidoError.innerText = ""
                $inputApellido.classList.remove("validationsErrors")
                $inputApellido.classList.add("validationsSuccess")


        }
    }

    /* EMAIL */
    $inputEmail.onblur = function () {
        switch (true) {
            case !$inputEmail.value.trim():
                $EmailError.innerText = "Campo obligatorio"
                $inputEmail.classList.remove("validationsSuccess")
                $inputEmail.classList.add("validationsErrors")
                $EmailError.classList.add("validationsErrors")
                break;

            case !regExEmail.test($inputEmail.value):
                $EmailError.innerText = "Debes ingresar un email válido"
                $inputEmail.classList.remove("validationsSuccess")
                $inputEmail.classList.add("validationsErrors")
                $EmailError.classList.add("validationsErrors")
                break;

            default:
                $inputEmail.classList.remove("validationsErrors")
                $EmailError.classList.remove("validationsErrors")
                $inputEmail.classList.add("validationsSuccess")
                $EmailError.innerText = ""


        }
    }

    /* MENSAJE */
    $inputMsg.onblur = function () {
        switch (true) {
            case !$inputMsg.value.trim():
                $MsgError.innerText = "Campo obligatorio"
                $inputMsg.classList.remove("validationsSuccess")
                $inputMsg.classList.add("validationsErrors")
                $MsgError.classList.add("validationsErrors")
                break;

            default:
                $inputMsg.classList.remove("validationsErrors")
                $MsgError.classList.remove("validationsErrors")
                $inputMsg.classList.add("validationsSuccess")
                $MsgError.innerText = ""

        }
    }

    if (location.pathname == "/info/contact/rrhh" || location.pathname == "/info/contact/franchise" || location.pathname == "/info/contact/attention") {

        /* TELEFONO */
        $inputTel.onblur = function () {

            switch (true) {
                case !$inputTel.value.trim():
                    $TelError.innerText = "Campo obligatorio"
                    $inputTel.classList.remove("validationsSuccess")
                    $inputTel.classList.add("validationsErrors")
                    $TelError.classList.add("validationsErrors")
                    break;

                case isNaN($inputTel.value):
                    $TelError.innerText = "El valor debe ser numerico"
                    $inputTel.classList.remove("validationsSuccess")
                    $inputTel.classList.add("validationsErrors")
                    $TelError.classList.add("validationsErrors")
                    break;
                case $inputTel.value.length < 8:
                    $TelError.innerText = "El telefono debe tener mas de 8 numeros"
                    $inputTel.classList.remove("validationsSuccess")
                    $inputTel.classList.add("validationsErrors")
                    $TelError.classList.add("validationsErrors")
                    break;

                default:
                    $inputTel.classList.remove("validationsErrors")
                    $TelError.classList.remove("validationsErrors")
                    $inputTel.classList.add("validationsSuccess")
                    $TelError.innerText = ""

            }
        }
    }
    /* ------------ */
    /* RRHH */
    /* ------------ */
    if (location.pathname == "/info/contact/rrhh") {
        /* CV */
        $inputCv.onblur = function () {
            if ($inputCv.files.length == 0) {
                $CvError.innerText = "Archivo obligatorio"
                $inputView.classList.add("validationsErrors")
                $inputView.classList.add("validationsErrors")
                $CvError.classList.add("validationsErrors")
            }
        }
        $inputCv.onchange = function () {
            var nameFile = document.querySelectorAll("#cvInput")[0].files[0].name;

            if (nameFile.length > 15) {/*Si el nombre del archivo tiene mas de 15 caracteres */
                nameFile = `${nameFile.substr(0, 15)}(...)`; /*  se substraen los primeros 15 caracteres y se coloca (...) */
            }

            document.querySelector(".cv-input span").innerHTML = `Nombre del archivo: ${nameFile}`;

            let $inputView = document.querySelector("#cvInputView")
            switch (true) {

                case !/\.(pdf)/.test($inputCv.value):
                    $CvError.innerText = "Archivo permitido (.pdf)"
                    $inputView.classList.remove("validationsSuccess")
                    $inputView.classList.add("validationsErrors")
                    $CvError.classList.add("validationsErrors")
                    break;

                default:
                    $inputView.classList.remove("validationsErrors")
                    $CvError.classList.remove("validationsErrors")
                    $inputView.classList.add("validationsSuccess")
                    $CvError.innerText = ""
            }
        }
    }

    /* ------------ */
    /* FRANQUICIA */
    /* ------------ */
    if (location.pathname == "/info/contact/franchise") {
        /* DNI */
        $inputDni.onblur = function () {

            switch (true) {
                case !$inputDni.value.trim():
                    $DniError.innerText = "Campo obligatorio"
                    $inputDni.classList.remove("validationsSuccess")
                    $inputDni.classList.add("validationsErrors")
                    $DniError.classList.add("validationsErrors")
                    break;

                case !regExDNI.test(document.querySelector('#dniInput').value):
                    $DniError.innerText = "El valor ingresado no es un dni"
                    $inputDni.classList.remove("validationsSuccess")
                    $inputDni.classList.add("validationsErrors")
                    $DniError.classList.add("validationsErrors")
                    break;

                default:
                    $inputDni.classList.remove("validationsErrors")
                    $DniError.classList.remove("validationsErrors")
                    $inputDni.classList.add("validationsSuccess")
                    $DniError.innerText = ""

            }

        }

        /* PROVINCIAS */
        $selectLocalidad.disabled = true
        $selectDSocial.disabled = true
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
            .then(response => response.json())
            .then(data => {
                var provinces = data.provincias.sort(function (prev, next) {
                    return prev.nombre > next.nombre
                        ? 1
                        : prev.nombre < next.nombre
                            ? -1
                            : 0;
                })
                return provinces.forEach(province => {
                    $selectProvince.innerHTML += `<option value="${province.id}">${province.nombre}</option>`
                });
            })
            .catch(err => console.log(err))

        $selectProvince.onblur = function () {
            if ($selectProvince.options[$selectProvince.selectedIndex].value == "") {
                $ProvinceError.innerText = "Selección obligatoria"
                $selectProvince.classList.remove("validationsSuccess")
                $selectProvince.classList.add("validationsErrors")
                $ProvinceError.classList.add("validationsErrors")
            }
        }


        $selectProvince.onchange = function (event) {
            $selectLocalidad.innerHTML = ""
            $selectLocalidad.disabled = false
            $selectDSocial.disabled = false
            let provinceNombre = event.target.value;

            $selectProvince.classList.remove("validationsErrors")
            $ProvinceError.classList.remove("validationsErrors")
            $selectProvince.classList.add("validationsSuccess")
            $ProvinceError.innerText = ""


            /* OPTIONS SELECT LOCALIDADES */

            function fetchProvince(value) {
                fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${value}&campos=id,nombre&max=5000`)
                    .then(response => response.json())
                    .then(results => {
                        console.log(results);
                        let localidades = results.departamentos.sort(function (prev, next) {
                            return prev.nombre > next.nombre
                                ? 1
                                : prev.nombre < next.nombre
                                    ? -1
                                    : 0;
                        });

                        localidades.forEach(location => {
                            if (results.parametros.provincia[0] == "02") {
                                $selectLocalidad.innerHTML = "<option value='0' selected>No hay opciones</option>"
                            } else {
                                $selectLocalidad.innerHTML += `<option value="" selected hidden>Selecciona</option>
                                <option value="${location.nombre}">${location.nombre}</option>`
                                $selectDSocial.innerHTML += `<option value="" selected hidden>Selecciona</option>
                                <option value="${location.nombre}">${location.nombre}</option>`
                            }
                        })
                    })
            }
            fetchProvince(provinceNombre)
        }

        /* LOCALIDAD */
        $selectLocalidad.onblur = function () {
            if ($selectLocalidad.options[$selectLocalidad.selectedIndex].value == "") {
                $LocalidadError.innerText = "Selección obligatoria"
                $selectLocalidad.classList.remove("validationsSuccess")
                $selectLocalidad.classList.add("validationsErrors")
                $LocalidadError.classList.add("validationsErrors")
            }
        }
        $selectLocalidad.onchange = function () {
            $selectLocalidad.classList.remove("validationsErrors")
            $LocalidadError.classList.remove("validationsErrors")
            $selectLocalidad.classList.add("validationsSuccess")
            $LocalidadError.innerText = ""
        }

        /* DOMICILIO */
        $inputDomicilio.onblur = function () {

            switch (true) {
                case !$inputDomicilio.value.trim():

                    $DomicilioError.innerText = "Campo obligatorio"
                    $inputDomicilio.classList.remove("validationsSuccess")
                    $inputDomicilio.classList.add("validationsErrors")
                    $DomicilioError.classList.add("validationsErrors")
                    break;

                case !regExDomicilio.test($inputDomicilio.value):
                    $inputDomicilio.innerHTML = ""
                    $DomicilioError.innerText = "Ingrese una dirección y su altura"
                    $inputDomicilio.classList.remove("validationsSuccess")
                    $inputDomicilio.classList.add("validationsErrors")
                    $DomicilioError.classList.add("validationsErrors")
                    break;

                case $inputDomicilio.value.trim().length < 6:
                    $DomicilioError.innerText = "El domicilio debe tener mas de 5 caracteres"
                    $inputDomicilio.classList.remove("validationsSuccess")
                    $inputDomicilio.classList.add("validationsErrors")
                    $DomicilioError.classList.add("validationsErrors")
                    break;

                default:
                    $inputDomicilio.classList.remove("validationsErrors")
                    $DomicilioError.classList.remove("validationsErrors")
                    $inputDomicilio.classList.add("validationsSuccess")
                    $DomicilioError.innerText = ""
            }

        }

        /* CUIT */
        $inputCuit.onblur = function () {
            switch (true) {
                case !$inputCuit.value.trim():
                    $CuitError.innerText = "Campo obligatorio"
                    $inputCuit.classList.remove("validationsSuccess")
                    $inputCuit.classList.add("validationsErrors")
                    $CuitError.classList.add("validationsErrors")
                    break;

                case !regExCUIT.test($inputCuit.value):
                    $CuitError.innerText = "El cuit ingresado es invalido"
                    $inputCuit.classList.remove("validationsSuccess")
                    $inputCuit.classList.add("validationsErrors")
                    $CuitError.classList.add("validationsErrors")
                    break;

                default:
                    $inputCuit.classList.remove("validationsErrors")
                    $CuitError.classList.remove("validationsErrors")
                    $inputCuit.classList.add("validationsSuccess")
                    $CuitError.innerText = ""
            }
        }

        /* RAZON SOCIAL */
        $inputRSocial.onblur = function () {
            switch (true) {
                case !$inputRSocial.value.trim():
                    $RSocialError.innerText = "Campo obligatorio"
                    $inputRSocial.classList.remove("validationsSuccess")
                    $inputRSocial.classList.add("validationsErrors")
                    $RSocialError.classList.add("validationsErrors")
                    break;

                case !regExAlphanumeric.test($inputRSocial.value):
                    $RSocialError.innerText = "No se permiten caracteres especiales"
                    $inputRSocial.classList.remove("validationsSuccess")
                    $inputRSocial.classList.add("validationsErrors")
                    $RSocialError.classList.add("validationsErrors")
                    break;

                default:
                    $inputRSocial.classList.remove("validationsErrors")
                    $RSocialError.classList.remove("validationsErrors")
                    $inputRSocial.classList.add("validationsSuccess")
                    $RSocialError.innerText = ""
            }
        }

        /* DIRECCION SOCIAL */
        $selectDSocial.onblur = function () {
            switch (true) {
                case !$selectDSocial.value.trim():
                    $DSocialError.innerText = "Campo obligatorio"
                    $selectDSocial.classList.remove("validationsSuccess")
                    $selectDSocial.classList.add("validationsErrors")
                    $DSocialError.classList.add("validationsErrors")
                    break;

                default:
                    $selectDSocial.classList.remove("validationsErrors")
                    $DSocialError.classList.remove("validationsErrors")
                    $selectDSocial.classList.add("validationsSuccess")
                    $DSocialError.innerText = ""
            }
        }
    }

    let form = qs("#form")

    function validationError(index, span, elements) {
        span[index].classList.add('validationsErrors');
        elements[index].classList.add("validationsErrors")
        if (elements[index].value === "") {
            span[index].innerText = "Campo obligatorio";
        }
    }

    function validationsSuccess(index, span, elements) {
        span[index].innerText = "";
        span[index].classList.remove('validationsErrors');
        elements[index].classList.remove('validationsErrors')
        elements[index].classList.add("validationsSuccess")
    }
    form.addEventListener("submit", function (event) {
        let spans = document.querySelectorAll(".error")
        event.preventDefault()
        let error = false;
        let elementos = form.elements;
        for (let i = 0; i < elementos.length - 1; i++) {
            if (elementos[i].name == "name") {
                switch (true) {
                    case elementos[i].value === '':
                    case !regExAlpha.test(elementos[i].value):
                    case elementos[i].value.length < 5:
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "lastName") {
                switch (true) {
                    case elementos[i].value === '':
                    case !regExAlpha.test(elementos[i].value):
                    case elementos[i].value.length < 5:
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "email") {
                switch (true) {
                    case elementos[i].value === '':
                    case !regExEmail.test(elementos[i].value):
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "msg") {
                switch (true) {
                    case elementos[i].value === '':
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "phone") {
                switch (true) {
                    case elementos[i].value === '':
                    case isNaN(elementos[i].value):
                    case elementos[i].value.length < 8:
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "cv") {
                switch (true) {
                    case elementos[i].files.length == 0:
                    case !/\.(pdf)/.test($inputCv.value):
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "dni") {
                switch (true) {
                    case !elementos[i].value.trim():
                    case !regExDNI.test(elementos[i].value):
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "province") {
                switch (true) {
                    case elementos[i].options[elementos[i].selectedIndex].value == "":
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name == "location" || elementos[i].name === "socialLocation") {
                switch (true) {
                    case elementos[i].disabled === true:
                    case elementos[i].options[elementos[i].selectedIndex].value == "":
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name === "address") {
                switch (true) {
                    case !elementos[i].value.trim():
                    case !regExDomicilio.test(elementos[i].value):
                    case elementos[i].value.trim().length < 6:
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name === "cuit") {
                switch (true) {
                    case !elementos[i].value.trim():
                    case !regExCUIT.test(elementos[i].value):
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }
            if (elementos[i].name === "businessName") {
                switch (true) {
                    case !elementos[i].value.trim():
                    case !regExAlphanumeric.test(elementos[i].value):
                        validationError(i, spans, elementos)
                        error = true;
                        break;
                    default:
                        validationsSuccess(i, spans, elementos)
                        break;
                }
            }

        }
        if (!error) {
            form.submit()
        }

    })
})