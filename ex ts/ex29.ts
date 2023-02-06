let ch= String(prompt("donner une chaine de caractère"))
let ch1=""
for(let i=0; i<ch.length; i++){
    if(ch[i]==" "){
        ch1=ch1 
    }else
    ch1=ch1+ch[i]
}
alert(ch+" 'sans espaces sera' "+ch1)