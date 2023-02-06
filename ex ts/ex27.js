var n = Number(prompt("donner la taille du tableau"));
var T = [];
for (var i = 0; i < n; i++) {
    T[i] = Number(prompt("donner la valeur " + i + " du tableau T"));
}
var min = T[0];
for (var i = 0; i < n; i++) {
    if (T[i] < min) {
        min = T[i];
    }
}
alert(T);
alert("la valeur minimale du tableau est " + min);
