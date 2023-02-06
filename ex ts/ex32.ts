let CH= String(prompt("donner un text"))
let minus=0
for(let i=0; i<CH.length; i++){
    let ind=CH.charCodeAt(i)
    if(96<ind && ind<123){
        minus=minus+1
    }
}
alert("le nombre des lettres minuscules est "+minus)
