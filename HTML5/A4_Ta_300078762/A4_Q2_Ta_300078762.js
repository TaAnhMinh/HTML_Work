var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];

var result = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];
var image;
var trackEmpt = new Array(2);
var adjup = new Array(2);
var adjdown = new Array(2);
var adjleft = new Array(2);
var adjright = new Array(2);
var left, right, up, down;

function start() {
    ramdomize();
    updateImg();
    document.getElementById("0").addEventListener("click", move0, false);
    document.getElementById("1").addEventListener("click", move1, false);
    document.getElementById("2").addEventListener("click", move2, false);
    document.getElementById("3").addEventListener("click", move3, false);
    document.getElementById("4").addEventListener("click", move4, false);
    document.getElementById("5").addEventListener("click", move5, false);
    document.getElementById("6").addEventListener("click", move6, false);
    document.getElementById("7").addEventListener("click", move7, false);
    document.getElementById("8").addEventListener("click", move8, false);
    document.getElementById("9").addEventListener("click", move9, false);
    document.getElementById("10").addEventListener("click", move10, false);
    document.getElementById("11").addEventListener("click", move11, false);
    document.getElementById("12").addEventListener("click", move12, false);
    document.getElementById("13").addEventListener("click", move13, false);
    document.getElementById("14").addEventListener("click", move14, false);
    document.getElementById("15").addEventListener("click", move15, false);
}

function updateImg() {
    var counter = 0;
    for (var i = 0; i < 4; i++) {   //row
        for (var z = 0; z < 4; z++) {   //col
            if (array[i][z] == 0) {
                trackEmpt[0] = i;
                trackEmpt[1] = z;
                //adjacent nodes, if adj does not exist then -1 -1
                adjFind(i, z);
            }
            image = document.getElementById(counter);
            image.setAttribute("src", array[i][z] + ".png");
            image.setAttribute("alt", "block number " + array[i][z]);
            counter++;
        }
    }
    checkdone();
}

function adjFind(row, col) {
    adjleft[0] = row;
    adjleft[1] = col - 1;

    adjright[0] = row;
    adjright[1] = col + 1;

    adjup[0] = row - 1;
    adjup[1] = col;

    adjdown[0] = row + 1;
    adjdown[1] = col;

    if (col == 0 || col == array.length - 1) { //last column
        if (col == array.length - 1) { //last column
            adjright[0] = -1;
            adjright[1] = -1;
            right = -1;
            left = array[adjleft[0]][adjleft[1]];
        } else {
            adjleft[0] = -1;
            adjleft[1] = -1;
            left = -1;
            right = array[adjright[0]][adjright[1]];
        }
    } else {
        right = array[adjright[0]][adjright[1]];
        left = array[adjleft[0]][adjleft[1]];
    }

    if (row == 0 || row == array[0].length - 1) {   //1st row
        if (row == array[0].length - 1) { //last row
            adjdown[0] = -1;
            adjdown[1] = -1;
            down = -1;
            up = array[adjup[0]][adjup[1]];
        } else {
            adjup[0] = -1;
            adjup[1] = -1;
            up = -1
            down = array[adjdown[0]][adjdown[1]];
        }

    } else {
        up = array[adjup[0]][adjup[1]];
        down = array[adjdown[0]][adjdown[1]];
    }

}

function ramdomize() {
    var temp, randomNo, randomNo2, randomNo3, randomNo4;
    var counter = 100;

    while (counter > 0) {
        counter--;
        do {
            randomNo = Math.floor(Math.random() * 4);
            randomNo2 = Math.floor(Math.random() * 4);
            randomNo3 = Math.floor(Math.random() * 4);
            randomNo4 = Math.floor(Math.random() * 4);
        } while (randomNo == randomNo3 && randomNo2 == randomNo4);    //repeat if 2 random numbers are equal.
        //perform swtich
        temp = array[randomNo][randomNo2];
        array[randomNo][randomNo2] = array[randomNo3][randomNo4];
        array[randomNo3][randomNo4] = temp;
    }
}

function move0() {
    var clkVal = array[0][0];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(0, 0);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move1() {
    var clkVal = array[0][1];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(0, 1);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move2() {
    var clkVal = array[0][2];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(0, 2);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move3() {
    var clkVal = array[0][3];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(0, 3);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move4() {
    var clkVal = array[1][0];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(1, 0);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move5() {
    var clkVal = array[1][1];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(1, 1);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move6() {
    var clkVal = array[1][2];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(1, 2);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move7() {
    var clkVal = array[1][3];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(1, 3);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move8() {
    var clkVal = array[2][0];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(2, 0);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move9() {
    var clkVal = array[2][1];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(2, 1);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move10() {
    var clkVal = array[2][2];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(2, 2);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move11() {
    var clkVal = array[2][3];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(2, 3);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move12() {
    var clkVal = array[3][0];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(3, 0);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move13() {
    var clkVal = array[3][1];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(3, 1);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move14() {
    var clkVal = array[3][2];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(3, 2);  //pass row and col
    } else {
        alert("illegal moves");
    }
}

function move15() {
    var clkVal = array[3][3];
    if (left == clkVal || right == clkVal || up == clkVal || down == clkVal) {
        swap(3, 3);  //pass row and col
    } else {
        alert("illegal moves");
    }
}
function swap(row, col) {
    array[trackEmpt[0]][trackEmpt[1]] = array[row][col];
    array[row][col] = 0;
    updateImg();
}

function checkdone() {
    var boo = true;
    for (var i = 0; i < array.length; i++) {
        for (var z = 0; z < array[0].length; z++) {
            if (array[i][z] != result[i][z]) {
                boo = false;
            }
        }
    }
    if (boo == true) {
        if (confirm('Congratulation, you win! Do you want to play again? [YES/NO]')) {
            ramdomize();
            updateImg();
        } else {
            window.alert("Refesh to play again.")
        }
    }
}

window.addEventListener("load", start, false);