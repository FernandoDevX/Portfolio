
function openMenu() {

    var x = document.getElementById("navegationClass");
    if (x.className === "navegationClass"){
        x.className += " menuJsClass";
        document.getElementById("threelineIconClass").innerHTML = "&Cross;";
    } else {
        x.className = "navegationClass"
        document.getElementById("threelineIconClass").innerHTML = "&#9776;";
    }

}