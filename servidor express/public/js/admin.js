function capitalize(text) { /* funcion creada para colocarle una mayuscula en la primer letra */
    return text.charAt(0).toUpperCase() + text.slice(1);
}
/* db.Category.findAll({
    include:[{ association: "category" },
    { association: "season" },
    { association: "images" },
    { association: "colors" },
    { association: "sizes" }
    ]
})
let lastId = 0
.then((users)=>{
    users.forEach(user => {
        if(!user.includes(lastId)){
            lastId = user.id + 1
        }
    }) 

}) */

function addOption(idInput,idSelect){
    let input = document.getElementById(idInput).value;
    const dato = document.getElementById(idSelect);
    dato.innerHTML = `<option value=${input}>${capitalize(input)}</option>`
}