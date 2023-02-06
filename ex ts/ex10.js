function suite(r) {
    var i;
    var n = 0;
    for (var i_1 = 1; i_1 < r + 1; i_1++) {
        n = n + i_1;
    }
    return (n);
}
var r = Number(prompt("donner un nombre"));
console.log(suite(r));
alert(suite(r));
