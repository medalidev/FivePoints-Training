function produit(x, y) {
    var ch;
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        ch = "produit négatif";
    }
    else
        ch = "produit positif";
    return (ch);
}
var x = Number(prompt('nombre 1'));
var y = Number(prompt('nombre 2'));
console.log(produit(x, y));
alert(produit(x, y));
