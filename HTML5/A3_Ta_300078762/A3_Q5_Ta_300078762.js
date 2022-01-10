var race = new Array(71); //position 1 to 70, 0 is ignored
//position of hare and tor
var hare;
var tor;
var clock = 0;
var s;
var interval

function start() {
    var startR = document.getElementById("start");
    startR.addEventListener("click", raceStart, false);
}

function raceStart() {
    hare = 1;
    tor = 1;
    s = "";
    document.getElementById("end").innerHTML = "";
    document.getElementById("display").innerHTML = "ON YOUR MARK, GET SET <br>BANG!!! <br>AND THEY’RE OFF!!!";
    assign();
    displayOut(race);
    interval = window.setInterval(update, 1000);
}

function assign() {
    var len = race.length;
    while (len-- > 0) {
        race[len] = "_ ";
    }
    if (tor == hare && clock != 0) {
        race[tor] = "OUCH!!!";
    } else if (tor == 1 && hare == 1 && clock == 0) {
        race[tor] = "TH";
    } else {
        race[tor] = "T";
        race[hare] = "H";
    }
}

function displayOut(array) {
    for (var i = 1; i < array.length; i++) {
        s += array[i];
    }
    s += "<br>"
    document.getElementById("track").innerHTML = s;
}

function update() {
    clock++;
    //while tor and hare not reach goal yet.
    tortoiseP();
    hareP();
    assign();
    displayOut(race);
    if (tor >= 70 || hare >= 70) {
        raceEnd();
    }

}

function raceEnd() {
    clearInterval(interval);
    //terminate
    if (tor >= 70 && hare >= 70) {
        document.getElementById("end").innerHTML = "<h1> IT’S A TIE.</h1>" + "<br> Time taken: " + clock + " Run simulation again";
        setTimeout(function(){raceStart();}, 2000);
    }
    else if (tor >= 70) {
        document.getElementById("end").innerHTML = "<h1>TORTOISE WINS!!! YAY!!!</h1>" + "<br> Time taken: " + clock + "<br> Click 'Start Race' or 'Reload webpage' to play again";
    } else {
        document.getElementById("end").innerHTML = "<h1>HARE WINS. YUCK!</h1>" + "<br> Time taken: " + clock + "<br> Click 'Start Race' or 'Reload webpage' to play again";
    }
    
}

function tortoiseP() {
    //generate percentage from 1 to 10.
    var percent = Math.floor(1 + Math.random() * 10);
    if (percent <= 5 && percent >= 1) {
        tor += 3;
    } else if (percent == 6 || percent == 7) {
        tor -= 6;
    } else {
        tor += 1;
    }
    //check slip
    if (tor < 1) {
        tor = 1;
    }
    if (tor > 70) {
        tor = 70;
    }
}
function hareP() {
    //generate percentage from 1 to 10.
    var percent = Math.floor(1 + Math.random() * 10);
    if (percent == 1 || percent == 2) {
        //sleep no move
    } else if (percent == 3 || percent == 4) {
        //big hop
        hare += 9;
    } else if (percent == 5) {
        //big slip
        hare -= 12;
    } else if (percent >= 6 && percent <= 8) {
        //small hop
        hare += 1;
    } else {
        //small slip
        hare -= 2;
    }
    //check slip
    if (hare < 1) {
        hare = 1;
    }
    if (hare > 70) {
        hare = 70;
    }
}

window.addEventListener("load", start, false);