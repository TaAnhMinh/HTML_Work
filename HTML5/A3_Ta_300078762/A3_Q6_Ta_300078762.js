function start() {
    var submit = document.getElementById("submit");
    submit.addEventListener("click", convert, false);
}
function convert() {
    var sentence = document.getElementById("textIn").value;
    if (sentence != ""){
        var words = sentence.split(" "); //array of words
        for (var i = 0; i < words.length; i++) {
            printLatinWord(words[i]);
        }
        document.getElementById("textOut").value += "\n";
    }
}
function printLatinWord(word) {
    var newW = word.slice(1, word.length - 1) + word[0] + "ay";
    document.getElementById("textOut").value += newW + " ";
}
window.addEventListener("load", start, false);