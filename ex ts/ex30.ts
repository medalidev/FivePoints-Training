let ch= String(prompt("donner une chaine de caractère"))
let lettre= String(prompt("donner une lettre"))
let exist: boolean
exist=false
let i=0 
while(exist==false && i<ch.length){
    if(ch[i]==lettre){
        exist=true 
    }
    i=i+1
}
if(exist==true){
    alert("la lettre "+lettre+" existe")
}else 
    alert("la lettre "+lettre+" n'existe pas")
