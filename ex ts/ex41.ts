let chif= Number(prompt("donner un chiffre décimal"))
while(chif<0 || chif>9){
    chif= Number(prompt("donner un chiffre décimal"))
}
let n= Number(prompt("donner un entier positif"))
while(n<=0){
    n= Number(prompt("donner un entier positif"))
}
let chifc: string
chifc=chif.toString()
let nc: string
nc=n.toString()
let pos: number 
let cont=0
let i=0
while(cont<2 && i<nc.length){
    if(nc[i]==chifc){
        cont=cont+1
        pos=i
    }
    i=i+1
}
if(cont==2){
    alert("la deuxième position de "+chifc+" dans "+nc+" est "+(pos+1))
}else 
alert("Il n'y a pas de deuxième position")
