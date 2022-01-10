window.addEventListener("load", start, false);

function start(){
    var a = [10, 9 ,6,6,7,4,3,2,5,1];
    outputArray("Data items in original order:" , a, document.getElementById("original"));
    a.sort(compareInt);
    outputArray("Data item in sorted order: ", a, document.getElementById("sorted"));
}

function outputArray(heading, array, output){
    output.innerHTML = heading + array.join(" ");
}

function compareInt(val1, val2){
    return parseInt(val1) - parseInt(val2);
}