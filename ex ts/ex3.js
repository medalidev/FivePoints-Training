function signe(a) {
    var ch;
    if (a > 0) {
        ch = "positif";
    }
    else if (a < 0) {
        ch = "négatif";
    }
    return (ch);
}
var a = Number(prompt('un nombre'));
console.log(signe(a));
