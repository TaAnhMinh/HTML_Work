var a = new Array(1000);
var len = a.length;
var prime = "The prime numbers are: ";
var count = 0;

function start() {
    //inifialize all values to 1. len will stop when reach -1 (part a)
    while (len-- > 0) {
        if (len == 0 && len == 1){
            a[len] = 0;
        }else{
            a[len] = 1;
        }
    }
    //loop through array, len will start from 2 (part b)
    len = 1;
    while (++len < 1000){
        if (a[len] == 1){
            var counter = len;
            while(counter < 1000-len){
                counter += len;
                a[counter] = 0;
            }
            prime += len + " ";
            count++;
        }
    }
    document.getElementById("result").innerHTML = prime;
    document.getElementById("prime").innerHTML = "The number of prime numbers is: " + count;
}

window.addEventListener("load", start, false);