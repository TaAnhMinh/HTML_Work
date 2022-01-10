var mouse;
var x1, y1, x2, y2;
var drag;
function start() {
    mouse = document.getElementById("image");
    mouse.addEventListener("mousedown", mousedown, false);
    document.addEventListener("mousemove", mousemove, false);
    document.addEventListener("mouseup", mouseup, false);
}

function mousedown(event) {
    event.preventDefault();
    x2 = event.clientX;
    y2 = event.clientY;
    drag = true;
    startX = parseInt(mouse.style.left) || 0;
    startY = parseInt(mouse.style.top) || 0;
}

function mousemove(e) {
    if (drag) {
        mouse.style.left = startX + e.clientX - x2 + 'px';
        mouse.style.top = startY + e.clientY - y2 + 'px';
    }
}


function mouseup() {
    drag = false;
}

window.addEventListener("load", start, false);