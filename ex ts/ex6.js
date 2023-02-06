function intervalle(s) {
    var ch;
    if (s <= 3 && s >= 1) {
        ch = "dans l'intervalle";
    }
    else
        ch = "n'est pas dans l'intervalle";
    return (ch);
}
var s = Number(prompt("un nombre"));
alert(intervalle(s));
