var chif = Number(prompt("donner un chiffre décimal"));
while (chif < 0 || chif > 9) {
    chif = Number(prompt("donner un chiffre décimal"));
}
var n = Number(prompt("donner un entier positif"));
while (n <= 0) {
    n = Number(prompt("donner un entier positif"));
}
var chifc;
chifc = chif.toString();
var nc;
nc = n.toString();
var pos;
var cont = 0;
var i = 0;
while (cont < 2 && i < nc.length) {
    if (nc[i] == chifc) {
        cont = cont + 1;
        pos = i;
    }
    i = i + 1;
}
if (cont == 2) {
    alert("la deuxième position de " + chifc + " dans " + nc + " est " + (pos + 1));
}
else
    alert("Il n'y a pas de deuxième position");
