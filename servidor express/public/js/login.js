
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.opacity = "1";
    modal.style.top = "0px";
    modal.style.transitionDuration = "1s"

}
btn2.onclick = function () {
    modal.style.opacity = "1";
    modal.style.top = "0px";
    modal.style.transitionDuration = "1s"
    document.getElementById("mySidenav").style.width = "0";
}
span.onclick = function () {
    modal.style.transitionDuration = "2s";
    modal.style.opacity = "0";
    modal.style.top = "-1000px";
    document.getElementById("mySidenav").style.width = "250px";
}
window.onclick = function (event) {
    if (!event.target == modal) {
        modal.style.transitionDuration = "2s"
        modal.style.opacity = "0";
        modal.style.top = "-1000px";
        document.getElementById("mySidenav").style.width = "250px";
    }
}

