var n = Number(prompt("donner le nombre de valeurs"));
var Z = [];
for (var i = 0; i < n; i++) {
    Z[i] = Number(prompt("donner la valeur " + i + " du tableau Z"));
}
var max = Z[0];
for (var i = 1; i < n; i++) {
    if (Z[i] > max) {
        max = Z[i];
    }
}
console.log(Z);
console.log("la plus grande valeur est " + max);
