var N = Number(prompt("donner la taille du tableau"));
while (5 >= N || N >= 20) {
    N = Number(prompt("donner la taille du tableau"));
}
var T = [];
var som = 0;
for (var i = 0; i < N; i++) {
    T[i] = Number(prompt("donner la valeur " + i + " du tableau T"));
    while (T[i] < 0) {
        T[i] = Number(prompt("donner la valeur " + i + " du tableau T"));
    }
    som = som + T[i];
}
var arith;
arith = som / N;
alert(T);
alert(arith);
