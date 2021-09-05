function capitalize(text) { /* funcion creada para colocarle una mayuscula en la primer letra */
    return text.charAt(0).toUpperCase() + text.slice(1);
}


function addColor(){
 let input = document.getElementById('input-addColor').value   /* traemos el valor que tiene el input colocado, en este caso el nombre de un color */
 const color = document.getElementById("color"); /* metemos en una variable la etiqueta select con el ID = color  */
 color.innerHTML = `<option value=${input.toLowerCase()}>${capitalize(input)}</option>` /* metemos dentro del select una etiqueta option con valor dinamico que se usa en la vista */
}