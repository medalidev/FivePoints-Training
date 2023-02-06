function signe(a: number): string{
let ch: string;
if (a>0){
    ch="positif";
}else if(a<0){
    ch="négatif";
} 
return(ch);
}
let a= Number(prompt('un nombre'))
console.log(signe(a))