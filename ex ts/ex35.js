var T = [];
T[0] = Number(prompt("donner la valeur de la case 0"));
var i = 0;
while (T[i] != 0) {
    i = i + 1;
    T[i] = Number(prompt("donner la valeur de la case " + i));
}
console.log(T);
var SOMME = 0;
for (var j = 0; j < T.length - 1; j++) {
    SOMME = SOMME + T[j];
}
console.log("la somme de la liste est " + SOMME);
