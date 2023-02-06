var ch = String(prompt("donner une chaine de caractère"));
var lettre = String(prompt("donner une lettre"));
var exist;
exist = false;
var i = 0;
while (exist == false && i < ch.length) {
    if (ch[i] == lettre) {
        exist = true;
    }
    i = i + 1;
}
if (exist == true) {
    alert("la lettre " + lettre + " existe");
}
else
    alert("la lettre " + lettre + " n'existe pas");
