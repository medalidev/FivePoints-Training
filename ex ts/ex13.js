function plusgrands() {
    var T = [];
    T[0] = Number(prompt("entrer le nombre numéro 0"));
    var i = 0;
    while (T[i] != 0) {
        i++;
        T[i] = Number(prompt("entrer le nombre numéro " + i));
    }
    var max = T[0];
    var pos = 0;
    for (var i_1 = 1; i_1 < T.length; i_1++) {
        if (T[i_1] > max) {
            max = T[i_1];
            pos = i_1;
        }
    }
    console.log(T);
    alert("le plus grand de ces nombres est " + max);
    console.log("le plus grand de ces nombres est " + max);
    alert("C'était le nombre numéro " + pos);
    console.log("C'était le nombre numéro " + pos);
}
plusgrands();
