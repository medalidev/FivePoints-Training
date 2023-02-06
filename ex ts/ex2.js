function exercice2(HT, Nb, TVA) {
    var TTC;
    TTC = HT * Nb * TVA;
    return (TTC);
}
var HT = Number(prompt('prix article'));
var Nb = Number(prompt('nombre articles'));
var TVA = Number(prompt('taux'));
console.log(exercice2(HT, Nb, TVA));
