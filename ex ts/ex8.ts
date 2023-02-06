function dix(q: number): string{
    let ch: string;
    for (let i=q+1; i<q+11; i++){
        ch=ch+" "+i.toString();
    }
    return(ch)
}
let q= Number(prompt("un nombre"))
alert(dix(q))
console.log(dix(q))