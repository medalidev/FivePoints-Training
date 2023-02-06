let ch= String(prompt("donner une chaine de caractère"))
let ch1=""
for(let i=0; i<ch.length; i++){
    ch1=ch[i]+ch1 
}
alert("l'inverse de "+ch+" est "+ch1)