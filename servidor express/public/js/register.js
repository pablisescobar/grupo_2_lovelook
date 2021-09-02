
var modal2 = document.getElementById('myModal-register')
var modal = document.getElementById("myModal");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var span2 = document.getElementsByClassName("close-dos")[0];

span2.onclick = function () {
    modal2.style.transitionDuration = "2s";
    modal2.style.opacity = "0";
    modal2.style.top = "-1000px";
    document.getElementById("mySidenav").style.width = "250px";
}

btn3.onclick = function () {
    modal.style.transitionDuration = "2s";
    modal.style.opacity = "0";
    modal.style.top = "-1000px";
    modal2.style.opacity = "1";
    modal2.style.top = "0px";
    modal2.style.transitionDuration = "1s";
}

btn4.onclick = function () {
    modal.style.opacity = "1";
    modal.style.top = "0px";
    modal.style.transitionDuration = "1s"
    modal2.style.transitionDuration = "2s";
    modal2.style.opacity = "0";
    modal2.style.top = "-1000px";
}

window.onclick = function (event) {
    if (!event.target == modal2) {
        modal2.style.transitionDuration = "2s"
        modal2.style.opacity = "0";
        modal2.style.top = "-1000px";
        document.getElementById("mySidenav").style.width = "250px";
    }
}