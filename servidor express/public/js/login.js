// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
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

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.transitionDuration = "2s"
    modal.style.opacity = "0";
    modal.style.top = "-1000px";
    document.getElementById("mySidenav").style.width = "250px";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.transitionDuration = "2s"
        modal.style.opacity = "0";
        modal.style.top = "-1000px";
        document.getElementById("mySidenav").style.width = "250px";
    }
}

