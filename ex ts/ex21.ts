let E= Number(prompt("donner le nombre des élèves"))
let B: number[]=[]
let s=0
let moy=1
for(let i=0; i<E; i++){
    B[i]= Number(prompt("donner la note de l'élève " + i))
    s=s+B[i]
}
moy=s/E
let sup=0  
for(let i=0; i<E; i++){
    if(B[i]>moy){
        sup=sup+1
    }
}
console.log(B)
console.log("le nombre des notes supérieures à la moyenne est "+ sup);