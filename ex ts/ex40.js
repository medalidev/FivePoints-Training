var n = Number(prompt("donner la taille du tableau"));
var T = [];
for (var i = 0; i < n; i++) {
    T[i] = String(prompt("donner la valeur de la case " + i));
    while (T[i].length != 1) {
        T[i] = String(prompt("donner la valeur de la case " + i));
    }
}
console.log(T);
var TV = [];
var TC = [];
var tv = 0;
var tc = 0;
for (var i = 0; i < n; i++) {
    if (T[i] == "a" || T[i] == "A" || T[i] == "e" || T[i] == "E" || T[i] == "y" || T[i] == "Y" || T[i] == "U" || T[i] == "u" || T[i] == "i" || T[i] == "I" || T[i] == "o" || T[i] == "O") {
        TV[tv] = T[i];
        tv = tv + 1;
    }
    else {
        TC[tc] = T[i];
        tc = tc + 1;
    }
}
console.log(TV);
console.log(TC);
