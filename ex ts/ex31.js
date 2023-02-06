var CH = String(prompt("donner un text"));
var Oc = [];
var index;
for (var i = 0; i < 26; i++) {
    Oc[i] = 0;
}
console.log(Oc);
for (var i = 0; i < CH.length; i++) {
    if (CH[i] != " ") {
        var c = CH[i].toUpperCase();
        index = c.charCodeAt(0) - 65;
        Oc[index] = Oc[index] + 1;
    }
}
console.log(Oc);
var SH = "";
for (var i = 0; i < CH.length; i++) {
    if (CH[i] != " ") {
        var c = CH[i].toUpperCase();
        index = c.charCodeAt(0) - 65;
        SH = SH + CH[i] + (Oc[index].toString());
    }
    else
        SH = SH + " ";
}
console.log(SH);
