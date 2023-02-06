function cadre(m: number): string{
    let ch: string;
    if (m>20){
        ch="Plus petit !"
    }else 
    if (m<10){
        ch="Plus grand !"
    }
    return(ch)
}
let m= Number(prompt("un nombre"))
alert(cadre(m))
console.log(cadre(m))