window.addEventListener("load", start, false);

function start() {
    var can = document.getElementById("canv");
    var context = can.getContext("2d");
    context.beginPath();
    context.moveTo(75, 40);
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();

    //fill it with 3 colors
    var grad = context.createLinearGradient(0, 0, 300, 0);
    grad.addColorStop(0, "black");
    grad.addColorStop(0.6, "orange");
    grad.addColorStop(1, "red");

    //fill with our gradient
    context.fillStyle = grad;
    context.fill();
}