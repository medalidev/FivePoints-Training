let N= Number(prompt("donner la taille du tableau"));
while(5>=N || N>=20){
    N= Number(prompt("donner la taille du tableau"));
}
let T: number[]=[]
let som=0
for(let i=0; i<N; i++){
    T[i]= Number(prompt("donner la valeur "+i+" du tableau T"))
    while(T[i]<0){
        T[i]= Number(prompt("donner la valeur "+i+" du tableau T"))
    }
    som=som+T[i]
}
let arith: number 
arith=som/N
alert(T)
alert(arith)
