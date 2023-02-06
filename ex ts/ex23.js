var a = Number(prompt("donner un réel"));
var n;
do {
    n = Number(prompt("donner un entier positif "));
} while (n < 0);
var puiss = 1;
for (var j = 0; j < n; j++) {
    puiss = puiss * a;
}
console.log(puiss);
alert(puiss);
