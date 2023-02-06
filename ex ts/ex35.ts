let T: number[]=[]
T[0]= Number(prompt("donner la valeur de la case 0"))
let i=0
while(T[i]!=0){
    i=i+1
    T[i]= Number(prompt("donner la valeur de la case "+i))
}
console.log(T)
let SOMME=0
for(let j=0; j<T.length-1; j++){
    SOMME=SOMME+T[j]
}
console.log("la somme de la liste est "+SOMME)