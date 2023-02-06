let n= Number(prompt("donner la taille du tableau"))
let T: Number[]=[]
for(let i=0; i<n; i++){
    T[i]= Number(prompt("donner la valeur "+i+" du tableau T"))
}
let num= Number(prompt("donner un nombre"))
let occ=0
for(let i=0; i<n; i++){
    if(T[i]==num){
        occ=occ+1
    }
}
alert("l'occurence de "+num+" dans le tableau est "+occ)
