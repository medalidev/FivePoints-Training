let N= Number(prompt("Ecrire le nombre des valeurs désirés"))
let F: Number[]=[]
for (let i=0; i<N; i++){
    F[i]= Number(prompt("Ecrire la valeur "+ i +" du F"))
}
let pos=0
let neg=0
for (let i=0; i<N; i++){
    if(F[i]<0){
        neg=neg+1;
    }else if(F[i]>0){
        pos=pos+1;
    }
}
console.log("le nombre de valeurs négatives est " + neg);
console.log("le nombre de valeurs positives est " + pos);