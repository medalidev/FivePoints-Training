function plusgrand() {
    var T = [];
    for (var i = 0; i < 10; i++) {
        T[i] = Number(prompt("entrer le nombre numéro 1"));
    }
    var max = T[0];
    var pos = 0;
    for (var i = 1; i < 10; i++) {
        if (T[i] > max) {
            max = T[i];
            pos = i;
        }
    }
    console.log(T);
    alert("le plus grand de ces nombres est " + max);
    console.log("le plus grand de ces nombres est " + max);
    alert("C'était le nombre numéro " + pos);
    console.log("C'était le nombre numéro " + pos);
}
plusgrand();
