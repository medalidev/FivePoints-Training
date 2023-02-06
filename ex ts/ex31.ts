let CH= String(prompt("donner un text"))
let Oc: number[]=[]
let index: number
for(let i=0; i<26; i++){
    Oc[i]=0
}
console.log(Oc);

for(let i=0; i<CH.length; i++){
    if(CH[i]!=" "){
        let c= CH[i].toUpperCase()
    index= c.charCodeAt(0)-65
    Oc[index]=Oc[index]+1
    }  
}
console.log(Oc);
let SH=""
for(let i=0; i<CH.length; i++){
    if(CH[i]!=" "){
        let c= CH[i].toUpperCase()
    index=c.charCodeAt(0)-65
    SH=SH+CH[i]+(Oc[index].toString())
    }else 
    SH=SH+" "
}
console.log(SH)
