
/* FUNCION QUE AL HACER ALGUN CAMBIO SOBRE LAS OPCIONES DEL LA ETIQUETA SELECT SE VISUALICEN LOS INPUT CORRESPONDIENTES A LA SECCION */

function selectionOption() {
    let asunto = document.getElementById('asunto')
    let option = asunto.value;

    let dni = document.getElementById('dni')
    let telefono = document.getElementById('telefono')
    let cv = document.getElementById('cv')
    let localidad = document.getElementById('localidad')
    var domicilio = document.getElementById('domicilio')
    var ciudad = document.getElementById('ciudad')
    var cuit = document.getElementById('cuit')
    var razon = document.getElementById('razon')
    var direSocial = document.getElementById('direSocial')
    var mensaje = document.getElementById('mensaje')


    if (option === "atencion") {
        dni.style.display = "none"
        cv.style.display = "none"
        localidad.style.display = "none"
        domicilio.style.display = "none"
        ciudad.style.display = "none"
        cuit.style.display = "none"
        razon.style.display = "none"
        direSocial.style.display = "none"
        telefono.style.display = "flex"
    } else if (option === "otros") {
        telefono.style.display = "none"
        dni.style.display = "none"
        cv.style.display = "none"
        localidad.style.display = "none"
        domicilio.style.display = "none"
        ciudad.style.display = "none"
        cuit.style.display = "none"
        razon.style.display = "none"
        direSocial.style.display = "none"
    } else if (option === "rrhh") {
        cv.style.display = "flex"
    } else if (option === "franquicias") {
        dni.style.display = "flex"
        cv.style.display = "none"
        localidad.style.display = "flex"
        domicilio.style.display = "flex"
        ciudad.style.display = "flex"
        cuit.style.display = "flex"
        razon.style.display = "flex"
        direSocial.style.display = "flex"
    }
}