let n= Number(prompt("donner le nombre de valeurs"))
let Z: number[]=[]
for(let i=0; i<n; i++){
    Z[i]= Number(prompt("donner la valeur " + i + " du tableau Z"))
}
let max=Z[0]
for(let i=1; i<n; i++){
    if(Z[i]>max){
        max=Z[i]
    }
}
console.log(Z)
console.log("la plus grande valeur est "+ max);
