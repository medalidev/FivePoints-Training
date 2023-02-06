var n = Number(prompt("donner la taille du tableau"));
while (n <= 5 || n >= 20) {
    n = Number(prompt("donner la taille du tableau"));
}
var T = [];
for (var i = 0; i < n; i++) {
    T[i] = Number(prompt("donne la valeur de la case " + i));
}
console.log(T);
var TN = [];
var TP = [];
var tn = 0;
var tp = 0;
for (var i = 0; i < n; i++) {
    if (T[i] > 0) {
        TP[tp] = T[i];
        tp = tp + 1;
    }
    else if (T[i] < 0) {
        TN[tn] = T[i];
        tn = tn + 1;
    }
}
console.log(TN);
console.log(TP);
