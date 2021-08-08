let listHelp = document.getElementById('list-help')
let listContact = document.getElementById('list-contact')
let listAbout = document.getElementById('list-about')


function openHelp(){
if(listHelp.style.display === "none"){
    listHelp.style.display = "block"
    listContact.style.display = "none"
    listAbout.style.display = "none"
}else{
    listHelp.style.display = "none"
}
}
    
function openContact(){
    if(listContact.style.display === "none"){
        listContact.style.display = "block"
        listHelp.style.display = "none"
        listAbout.style.display = "none"
    }else{
        listContact.style.display = "none"
    }
    }

    function openAbout(){
        if(listAbout.style.display === "none"){
            listAbout.style.display = "block"
            listContact.style.display = "none"
            listHelp.style.display = "none"
        }else{
            listAbout.style.display = "none"
        }
        }

