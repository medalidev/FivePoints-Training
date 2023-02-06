function exercice2(HT: number, Nb: number, TVA: number): number{
let TTC: number;
    TTC = HT*Nb*TVA;
    return(TTC)
}
let HT =Number(prompt('prix article'))
let Nb =Number(prompt('nombre articles'))
let TVA =Number(prompt('taux'))
console.log(exercice2(HT,Nb,TVA));