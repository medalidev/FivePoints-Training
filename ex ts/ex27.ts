let n= Number(prompt("donner la taille du tableau"))
let T: Number[]=[]
for(let i=0; i<n; i++){
    T[i]= Number(prompt("donner la valeur "+i+" du tableau T"))
}
let min=T[0]
for(let i=0; i<n; i++){
    if(T[i]<min){
        min=T[i]
    }
}
alert(T)
alert("la valeur minimale du tableau est "+min)