function nom(d, b, c) {
    var ch;
    if ((d.charCodeAt(0)) < (b.charCodeAt(0)) && (b.charCodeAt(0)) < (c.charCodeAt(0))) {
        ch = "rangés dans l'ordre alphabétique";
    }
    else
        ch = "non rangés dans l'ordre alphabétique";
    return (ch);
}
var d = String(prompt('nom 1'));
var b = String(prompt('nom 2'));
var c = String(prompt('nom 3'));
alert(nom(d, b, c));
