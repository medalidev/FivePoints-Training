function multip(w) {
    for (var i = 1; i < 11; i++) {
        console.log(w + '*' + i + '=' + w * i);
    }
}
var a = Number(prompt('donner un numobre'));
console.log('Table de ', a);
multip(a);
