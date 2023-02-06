function suite(r: number): number{
    let i: number;
    let n=0;
    for(let i=1; i<r+1; i++){
        n=n+i;
    }
    return(n)
}
let r= Number(prompt("donner un nombre"))
console.log(suite(r))
alert(suite(r))