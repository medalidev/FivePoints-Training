function dix(q) {
    var ch;
    for (var i = q + 1; i < q + 11; i++) {
        ch = ch + " " + i.toString();
    }
    return (ch);
}
var q = Number(prompt("un nombre"));
alert(dix(q));
console.log(dix(q));
