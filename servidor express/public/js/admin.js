function capitalize(text) { /* funcion creada para colocarle una mayuscula en la primer letra */
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function addOption(idInput,idSelect){
    let input = document.getElementById(idInput).value;
    const dato = document.getElementById(idSelect);
    dato.innerHTML = `<option value=${input.toLowerCase()}>${capitalize(input)}</option>`
}