var CH = String(prompt("donner un text"));
var minus = 0;
for (var i = 0; i < CH.length; i++) {
    var ind = CH.charCodeAt(i);
    if (96 < ind && ind < 123) {
        minus = minus + 1;
    }
}
alert("le nombre des lettres minuscules est " + minus);
