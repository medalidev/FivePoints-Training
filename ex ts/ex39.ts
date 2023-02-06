let n= Number(prompt("donner la taille du tableau"))
while(n<=5 || n>=20){
    n= Number(prompt("donner la taille du tableau"))
}
let T: Number[]=[]
for(let i=0; i<n; i++){
    T[i]= Number(prompt("donne la valeur de la case "+i))
}
console.log(T);
let TN: Number[]=[]
let TP: Number[]=[]
let tn=0
let tp=0
for(let i=0; i<n; i++){
    if(T[i]>0){
        TP[tp]=T[i]
        tp=tp+1
    }else 
    if(T[i]<0){
        TN[tn]=T[i]
        tn=tn+1
    }  
}
console.log(TN)
console.log(TP)

