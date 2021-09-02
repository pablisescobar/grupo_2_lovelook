const { options } = require("../../src/routes/admin");

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function addColor(){
 let input = document.getElementById('input-addColor').value
 const color = document.getElementById("color");
 color.innerHTML = `<option value=${input.toLowerCase()}>${capitalize(input)}</option>`+ options
}