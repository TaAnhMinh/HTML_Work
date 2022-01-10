window.addEventListener("load", start, false);

function start(){
    var can = document.getElementById("canv");
    var context=  can.getContext("2d");
    context.textAlign = "start";
    context.shadowColor = "gray";
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 5;
    context.shadowBlur = 6;
    context.font = "40px 'Helvetica'";

    context.fillText("HTML5 Canvas", 0, 100);
}