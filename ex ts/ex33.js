var ch = String(prompt("donner un text"));
var mot = 0;
if (ch[ch.length - 1] != " ") {
    mot = mot + 1;
}
for (var i = 1; i < ch.length; i++) {
    if (ch[i] == " " && ch[i - 1] != " ") {
        mot = mot + 1;
    }
}
alert("le nombre de mot dans le text est " + mot);
