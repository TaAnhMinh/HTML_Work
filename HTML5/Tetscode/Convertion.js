function printLatinWord() {
    var text1 = document.getElementById("TextArea1").value;
    var result = "";
    for (var i = 0; i < text1.length; i++) {
        if (text1.charAt(i) != " ") {
            var temp = text1.charAt(i++);
            for (; text1.charAt(i) != " " && i < text1.length; i++) {
                var result = result + text1.charAt(i);
            }
            var result = result + temp + "ay ";
        }
        else {
            result = result + text1.charAt(i);
        }
    }
    document.getElementById("TextArea2").value = result;

}