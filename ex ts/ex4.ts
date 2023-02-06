function produit(x: number, y: number): string{
    let ch: string; 
    if ((x<0 && y>0)||(x>0 && y<0)){
        ch="produit négatif";
    }else 
    ch="produit positif";
    return(ch);
}
let x= Number (prompt('nombre 1'))
let y= Number (prompt('nombre 2'))
console.log(produit(x,y))
alert(produit(x,y))