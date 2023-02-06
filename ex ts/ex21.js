var E = Number(prompt("donner le nombre des élèves"));
var B = [];
var s = 0;
var moy = 1;
for (var i = 0; i < E; i++) {
    B[i] = Number(prompt("donner la note de l'élève " + i));
    s = s + B[i];
}
moy = s / E;
var sup = 0;
for (var i = 0; i < E; i++) {
    if (B[i] > moy) {
        sup = sup + 1;
    }
}
console.log(B);
console.log("le nombre des notes supérieures à la moyenne est " + sup);
