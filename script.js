var css = document.querySelector("h3");
//can use .color1 to query select a CLASS
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
//initial load
body.style.background ="linear-gradient(to right, "+ color1.value+ ", "+ color2.value+ ")";
css.textContent = body.style.background + ";"
// mouseenter, click, keypress, input <- what we can use for color check
//function that delivers the color input into a variable
function linearGradient() {
    body.style.background ="linear-gradient(to right, "+ color1.value+ ", "+ color2.value+ ")";
    css.textContent = body.style.background + ";"
}


color1.addEventListener("input", linearGradient);
color2.addEventListener("input", linearGradient);
