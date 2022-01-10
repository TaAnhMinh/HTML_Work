var iconImg;
var pictures = [1,2,3,4,5,6];
var description = ["Die 1 spots","Die 2 spots","Die 3 spots","Die 4 spots","Die 5 spots","Die 6 spots"];

function pickImage(){
    var index = Math.floor(Math.random()*6);
    iconImg.setAttribute("src", "die" + pictures[index]+".png");
    iconImg.setAttribute("alt", description[index]);
}

function start(){
    iconImg = document.getElementById("image");
    iconImg.addEventListener("click", pickImage, false);
}

window.addEventListener("load", start, false);