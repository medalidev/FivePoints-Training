var ch = String(prompt("donner une chaine de caractère"));
var ch1 = "";
for (var i = 0; i < ch.length; i++) {
    ch1 = ch[i] + ch1;
}
alert("l'inverse de " + ch + " est " + ch1);
