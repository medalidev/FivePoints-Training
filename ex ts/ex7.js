function cadre(m) {
    var ch;
    if (m > 20) {
        ch = "Plus petit !";
    }
    else if (m < 10) {
        ch = "Plus grand !";
    }
    return (ch);
}
var m = Number(prompt("un nombre"));
alert(cadre(m));
console.log(cadre(m));
