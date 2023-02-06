var n = Number(prompt("donner la taille du tableau"));
var T = [];
for (var i = 0; i < n; i++) {
    T[i] = Number(prompt("donner la valeur " + i + " du tableau T"));
}
var num = Number(prompt("donner un nombre"));
var occ = 0;
for (var i = 0; i < n; i++) {
    if (T[i] == num) {
        occ = occ + 1;
    }
}
alert("l'occurence de " + num + " dans le tableau est " + occ);
