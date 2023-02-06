let n= Number(prompt("donner la taille du tableau"))
while(n<4 || n>12 || n%2!=0){
    n= Number(prompt("donner la taille du tableau"))
}
let ch: string 
let T: string[]=[]
for(let i=0; i<n; i++){
    T[i]= String(prompt("donner chaine de caractère num "+i))
    while(T[i].length==0 || T[i].length>6){
        T[i]= String(prompt("donner chaine de caractère num "+i))
    }
}
console.log(T)
let Tcod: string[]=[]
for(let i=0; i<n; i++){
    ch=T[i]
    let ch1=""
    for(let j=0; j<ch.length; j++){

        if(ch[j]=="a" || ch[j]=="A" || ch[j]=="e" || ch[j]=="E" || ch[j]=="u" || ch[j]=="U" || ch[j]=="i" || ch[j]=="I" || ch[j]=="o" || ch[j]=="O" || ch[j]=="y" || ch[j]=="Y"){
            ch1=ch1+ch[j]+ch.charCodeAt(j)
        }else 
        ch1=ch1+ch[j]
    }
    Tcod[i]=ch1
}
console.log(Tcod)
