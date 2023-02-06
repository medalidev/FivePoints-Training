let N= Number(prompt("donner la taille du tableau"))
while(N<=2 || N>=20){
    N= Number(prompt("donner la taille du tableau"))
}
let T: number[]=[]
for(let i=0; i<N; i++){
    T[i]= Number(prompt("donner la valeur de la case "+i))
}
console.log(T);
let trouv=false
let j=0
let ind: number 
while(trouv==false && j<N){
    if(T[j]%2==0){
        trouv=true
        ind=j 
    }
    j=j+1
}
if(trouv==true){
    console.log("l'indice du premier nombre pair est "+ind)
}else 
     console.log("n'existe pas un nombre pair")

